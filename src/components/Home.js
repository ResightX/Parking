import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import './styles/Home.css';
import CustomButton from './CustomButton.js';

function Home() {
	const [isActive, setActive] = useState(false);

	function handleClick(e){
		setActive(!isActive);
	}

	return (
		<>
			<div className="homeblock">
				<label for="places">Выберите парковку</label>
				<select id="places" name="places" class="form-control-lg">
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>
				<label for="date">Выберите дату</label>
				<select id="date" name="date" class="form-control-lg">
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>
			</div>

			<div className="lots">
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
		</>
	);
}

export default Home;
