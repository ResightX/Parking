import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'; 
import Dashboard from './Dashboard.js';
import Cookies from 'js-cookie';

import './styles/Admin.css';

function Admin (){
	const [auth, setAuth] = useState(false);

	function handleClick(){
		Cookies.set('auth', 'true');
		setAuth(true);
	}

	if (Cookies.get('auth') == 'true'){
		return (
			<Dashboard setAuth={setAuth} />
		);
	}

	return (
		<form action="" className="adminform d-flex justify-content-center">
			<div className="admincustomcard p-4">
				<h1>ADMIN PANEL LOGIN FORM</h1>
				<label for="adminlogin">Login</label>
				<input type="text" id="adminlogin" className="form form-control" />
				<label for="adminpassword" className="mt-2">Password</label>
				<input type="password" id="adminpassword" className="form form-control" />
				<button type="button" onClick={handleClick} class="adminformbtn mt-4">Log in</button>
			</div>
		</form>
	);
}

export default Admin;
