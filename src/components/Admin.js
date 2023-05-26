import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'; 
import Dashboard from './Dashboard.js';
import Cookies from 'js-cookie';
import axios from 'axios';

import './styles/Admin.css';

function Admin (){
	const [auth, setAuth] = useState(false);

	function handleClick(e){
		e.preventDefault();

		axios.post('http://localhost:3001/api/admin', {
			username: e.target.username.value,
			password: e.target.password.value
		}).then(res => {
			if (res.data.admin === true){
				Cookies.set('AdminAuthName', 'admin');
				setAuth(true);
			}else {
				alert('error');
			}
		})
	}

	if (Cookies.get('AdminAuthName') == 'admin'){
		return (
			<Dashboard setAuth={setAuth} />
		);
	}

	return (
		<form onSubmit={handleClick} className="adminform d-flex justify-content-center">
			<div className="admincustomcard p-4">
				<h1>ADMIN PANEL</h1>
				<label for="adminlogin">Login</label>
				<input type="text"l name="username" id="adminlogin" className="form form-control" />
				<label for="adminpassword" className="mt-2">Password</label>
				<input type="password" name="password" id="adminpassword" className="form form-control" />
				<button type="submit" class="adminformbtn mt-4">Log in</button>
			</div>
		</form>
	);
}

export default Admin;
