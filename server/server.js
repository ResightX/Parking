// express, cors, sqlite3
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const {resolve} = require('path')

const app = express();
app.use(cors());
// cors middleware
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

app.use(express.json());

const port = 3001;

const db = new sqlite3.Database('./credentials.db');
const lotsdb = new sqlite3.Database('./database.db');

app.get('/', (req, res) => {
	res.send('Hello World!');
})


// post that checks if there are rows with that username and password in the database if so then return object validated: true else return object validated: false
app.post('/validate', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	console.log(username, password);

	db.all(`SELECT * FROM credentials WHERE username = '${username}' AND password = '${password}'`, (err, rows) => {
			if (rows.length > 0) {
				res.send({ validated: true });
			} else {
				res.send({ validated: false });
			}
		}
	)
})

app.post('/api/register', (req, res) => {
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;

	if (email == '' || username == '' || password == '') {
		res.send({ registered: false });
		return;
	}

	console.log(`Registering ${username} with email ${email} with password ${password}`);

	db.all(`SELECT * FROM credentials WHERE username = '${username}'`, (err, rows) => {
		if (rows.length > 0) {
			res.send({ registered: false });
		}
		else {
			db.run(`INSERT INTO credentials (username, password) VALUES ('${username}', '${password}')`, (err) => {
				if (err) {
					res.send({ registered: false });
				} else {
					res.send({ registered: true });
				}	
			})
		}
	})

})
	
app.post('/api/images', (req, res) => {
	const username = req.body.username;

    // Check if the file with such username.png exists
    if (fs.existsSync(`./${username}.png`)) {
        res.sendFile(`./${username}.png`, {root: '.'});
    } else {
        res.send({ status: 'File not found' });
    }
})

app.post('/api/parking', (req, res) => {
	// Select all rows from the database credentials from table PARKING
	db.all(`SELECT address FROM PARKING_LOT`, (err, rows) => {
		res.send(rows);
	});
});

app.post('/api/getdate', (req, res) => {
	const date = new Date();
	const year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if(month < 10){
		month = '0' + month;
	}
	if(day < 10){
		day = '0' + day;
	}

	res.send({date: year + '-' + month + '-' + day});
});

app.post('/api/getlots', (req, res) => {
	lotsdb.all(`SELECT * FROM PARKING_LOT`, (err, rows) => {
		res.send(rows);
	});
})

app.post('/api/book', (req, res) => {
	const selectedLots = req.body.selectedLots;
	let isDataValid = true;

	if (selectedLots.length === 0) {
		isDataValid = false;
	}

	for (let i = 0; i < selectedLots.length && isDataValid; i++) {
		if (!selectedLots[i].match(/^[A-Z0-9]+$/)) {
			console.log('Invalid value ' + selectedLots[i]);
			isDataValid = false;
			break;
		}
	}

	if (isDataValid) {
		const sqldata = 'SELECT * FROM PARKING_LOT WHERE number IN (' + selectedLots.map(lot => `'${lot}'`).join(', ') + ')';
		lotsdb.all(sqldata, (err, rows) => {
			res.send({message: 'Success', data: rows});
		})
	} else {
		res.send({message: 'Fail', data: []});
	}
});

app.post('/api/payment', (req, res) => {
	const name = req.body.name;
	const selectedLots = req.body.selectedLots;
	let isDataValid = true;

	if (selectedLots == null || selectedLots.length === 0) {
		isDataValid = false;
	}

	if (isDataValid){
		for (let i = 0; i < selectedLots.length && isDataValid; i++) {
			if (!selectedLots[i].match(/^[A-Z0-9]+$/)) {
				console.log('Invalid value ' + selectedLots[i]);
				isDataValid = false;
				break;
			}
		}
	}

	const date = new Date();
	const current_datetime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	if (isDataValid) {
		const sqldata = 'SELECT * FROM PARKING_LOT WHERE number IN (' + selectedLots.map(lot => `'${lot}'`).join(', ') + ')';
		const sqldata2 = 'UPDATE PARKING_LOT SET isactive = false WHERE number IN (' + selectedLots.map(lot => `'${lot}'`).join(', ') + ')';
		const sqldata3 = `INSERT INTO ORDERS (user_name, description, order_date) VALUES ('${name}', '${selectedLots.join(', ')}', '${current_datetime}')`;
		lotsdb.all(sqldata, (err, rows) => {
			// check rows isactive column
			for (let i = 0; i < rows.length; i++) {
				if (!rows[i].isactive) {
					isDataValid = false;
					break;
				}
			}
		})


		if (isDataValid) {
			lotsdb.run(sqldata2, (err) => {})
			lotsdb.run(sqldata3, (err) => {})
			res.send({message: 'Success', data: []});
		} else {
			res.send({message: 'Fail', data: []});
		}
	} else {
		res.send({message: 'Fail', data: []});
	}
})

app.post('/api/orders', (req, res) => {
	const name = req.body.name;
	console.log(name);

	lotsdb.all(`SELECT * FROM ORDERS where user_name = '${name}'`, (err, rows) => {
		console.log(rows);
		res.send(rows);
	})
})

app.post('/api/admin', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	if (username == '' || password == '') {
		res.send({admin: false});
	}

	db.all(`SELECT * FROM admin WHERE username = '${username}' AND password = '${password}'`, (err, rows) => {
		if (rows.length > 0) {
			res.send({admin: true});
		}
		else {
			res.send({admin: false});
		}
	})
})

app.post('/api/users', (req, res) => {

	// get all users from database
	
	db.all(`SELECT username FROM credentials`, (err, rows) => {
		if (rows.length > 0) {
			res.send(rows);
		} else {
			res.send({message: 'No data'});
		}
	})
})

app.post('/api/spotsflush', (req, res) => {

	// set all isactive to true
	
	lotsdb.run(`UPDATE PARKING_LOT SET isactive = true`, (err) => {
		if (err) {
			res.send({message: 'Fail'});
		} else {
			res.send({message: 'Success'});
		}
	})
})

app.post('/api/deleteUser', (req, res) => {
	const username = req.body.name;

	db.run(`DELETE FROM credentials WHERE username = '${username}'`, (err) => {
		if (err) {
			res.send({message: 'Fail'});
		} else {
			res.send({message: 'Success'});
		}
	})
})

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
})
