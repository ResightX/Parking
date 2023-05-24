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

app.post('/register', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	console.log(`Registering ${username} with password ${password}`);

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
	db.all(`SELECT address FROM PARKING`, (err, rows) => {
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

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
})