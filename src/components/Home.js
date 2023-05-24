import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import CustomButton from './CustomButton.js';
import Cookies from 'js-cookie';
import axios from 'axios';

function Home() {
	const [isActive, setActive] = useState(false);
	const name = Cookies.get('AuthName');
	const [places, setPlaces] = useState([]);
	const [date, setDate] = useState();	

	function handleClick(e){
		setActive(!isActive);
	}

	function handleDateChange(e){
		setDate(e.target.value);
	}

	function handleParkingOptions(e){

	}

	// useEffects
	useEffect(() => {
		axios.post('http://localhost:3001/api/getdate', {

		}).then(res => {
			setDate(res.data.date);
		})
	}, [])

	useEffect(() => {
		axios.post('http://localhost:3001/api/parking', {

		}).then(res => {
			setPlaces(res.data);
			console.log(res.data);
		})
	}, []);

	return (
		<>
		    <div className="greeting">
				{name != undefined ? <h2>Здравствуйте, {name}!</h2> : <h2>Здравствуйте!</h2>}
			</div>
			<div className="homeblock mt-3">
				<label for="places">Выберите парковку</label>
				<select onClick={handleParkingOptions} id="places" name="places" class="form-control-lg">
					{places.map(place => (
						<option>{place.address}</option>
					))}
				</select>
				<label for="date">Выберите дату</label>
				<input type="date" value={date} onChange={handleDateChange} id="date" name="date" class="form-control-lg">
				</input>
			</div>

		<div class="lots-container">
			<div className="lots">
				<CustomButton className="lot1" />
				<CustomButton className="lot2" />
				<CustomButton className="lot3" />
				<CustomButton className="lot4" />
				<CustomButton className="lot5" />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
				<CustomButton />
			</div>
		</div>
			<button class="bookbtn btn btn-dark btn-lg btn-block">Забронировать</button>
		</>
	);
}

export default Home;
