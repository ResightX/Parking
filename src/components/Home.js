import Container from 'react-bootstrap/Container';
import React, { useState, useEffect, useRef } from 'react';
import './styles/Home.css';
import CustomButton from './CustomButton.js';
import Cookies from 'js-cookie';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Puff } from 'react-loader-spinner';
import FloatingMessage from './FloatingMessage.js';
import { render } from '@testing-library/react';

function Home() {
	const [isActive, setActive] = useState(false);
	const name = Cookies.get('AuthName');
	const [places, setPlaces] = useState([]);
	const [date, setDate] = useState();	
	const [lots, setLots] = useState([]);
	const [selectedLots, setSelectedLots] = useState([]);
	const btnRef = useRef();
	const [isLoading, setIsLoading] = useState(false);

	function handleClick(e){
		setActive(!isActive);
	}

	function handleMessage(){
		render(<FloatingMessage message_type='success' message_text='Test' />);
	}
	function handleMessage2(){
		render (<FloatingMessage message_type='fail' message_text='Test' />);
	}
	function handleMessage3(){
		render (<FloatingMessage message_type='warning' message_text='Test' />);
	}
	function handleMessage4(){
		render (<FloatingMessage message_type='asd' message_text='Test' />);
	}

	function handleBook(e){
		console.log(selectedLots);
		if (selectedLots.length === 0){
			alert("Please select at least one lot");
		} else {

			axios.post('http://localhost:3001/api/book', {
				selectedLots: selectedLots,
			}).then(res => {
				console.log(res.data);
				sessionStorage.setItem('selectedLots', JSON.stringify(selectedLots));
				window.location.href = '/checkout';
			})

		}
	}

	function handleDateChange(e){
		setDate(e.target.value);
	}

	function handleParkingOptions(e){

	}

	function handleChoice(e, lot) {
		if(e.target.classList.contains('activebtn')){
			e.target.classList.remove('activebtn');
			setSelectedLots(selectedLots.filter(item => item !== lot.number));
		} else {
			e.target.classList.add('activebtn');
			setSelectedLots([...selectedLots, lot.number]);
		}
	}
	
	useEffect(() => {
		setIsLoading(true);
		axios.post('http://localhost:3001/api/get_parking_spots', {

		}).then(res => {
			setIsLoading(false);
			setLots(res.data);
		})
	}, [])

	function handleButtonClick(lot){
		if (selectedLots.includes(lot)){
			setSelectedLots(selectedLots.filter(item => item !== lot));
		} else {
			setSelectedLots([...selectedLots, lot]);
		}

	}

	function getSomeLog(){
		console.log(selectedLots);
	}

	return (
		<>
		    <div className="greeting">
				{name != undefined ? <h2>Здравствуйте, {name}!</h2> : <h2>Здравствуйте!</h2>}
			</div>

		    <div className="instructions-container mt-3">
				<FontAwesomeIcon className="infoicon" icon={faCircleInfo} />
				<div className="instructions">
					Выберите свободные места и нажмите на кнопку "Забронировать"
				</div>
			</div>
			
		<button class="btn btn-primary mt-3 me-3" onClick={handleMessage} >success</button>
		<button class="btn btn-primary mt-3 me-3" onClick={handleMessage2} >fail</button>
		<button class="btn btn-primary mt-3" onClick={handleMessage3} >warning</button>
		<button class="btn btn-primary mt-3" onClick={handleMessage4} >unknown</button>

		{isLoading ? 
			<div className="loader-container">
				<Puff className="loader"
					height="80"
					width="80"
					radius="9"
					color="#f4b8e4" //c6d0f5
					ariaLabel="three-dots-loading"
					wrapperStyle
					wrapperClass
				/>
			</div>
			: 
			<>
			<div class="lots-container mt-3">
				<div class="lot-items-container">
					<div className="lots">
						{lots.map(lot => (
							lot.is_available ? <button className={`lot lot-available lot-${lot.number}`} onClick={(e) => handleChoice(e, lot)}>{lot.number}</button> : <button className="lot inactivebtn">{lot.number}</button>
						))}
					</div>
				</div>
			</div>
			<button class="bookbtn btn btn-lg btn-block" onClick={handleBook}>Забронировать</button>
			</>
		}
		</>
	);
}

export default Home;
