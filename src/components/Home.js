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
	const [lots, setLots] = useState([]);

	function handleClick(e){
		setActive(!isActive);
	}

	function handleDateChange(e){
		setDate(e.target.value);
	}

	function handleParkingOptions(e){

	}


	useEffect(() => {
		axios.post('http://localhost:3001/api/getlots', {
		}).then(res => {
			setLots(res.data);
		})
	}, []);

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
				<input type="date" value={date} onChange={handleDateChange} id="date" name="date" class="form-control-lg" />
				<label for="available" id="availablecheckboxtext">Только доступные</label>
				<input type="checkbox" id="availablecheckbox" name="available" class="form-check-input" />
			</div>

		<div class="lots-container">
			<div className="lots">
				{lots.map(lot => (
					lot.isactive ? <CustomButton available={true} text={lot.number} /> : <CustomButton available={false} text={lot.number} />
				))}
			</div>
		</div>
		<button class="bookbtn btn btn-lg btn-block">Забронировать</button>
		</>
	);
}

export default Home;
