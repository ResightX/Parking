import React, { useState } from 'react';
import './styles/AdminHeader.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './styles/Dashboard.css';
import Cookies from 'js-cookie';
import AdminParking from './AdminParking.js';
import AdminUsers from './AdminUsers.js';
import { Routes, Route } from 'react-router-dom';

function Dashboard ({setAuth}){
	const [elem, setElem] = useState('');

	function handleClick(){
		window.location.reload();
		Cookies.set('AdminAuthName', '');
		setAuth(false);
	}

	function testHandle(e){
		setElem(e.target.name);
	}

	return (

		<>
		<Navbar bg="light" expand="lg">
		  <Container>
			<Navbar.Brand href="#home">Spoton Admin</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			  <Nav className="me-auto">
				<Nav.Link onClick={testHandle} name="parking">Парковка</Nav.Link>
				<Nav.Link onClick={testHandle} name="users">Пользователи</Nav.Link>
				<button className="btn btn-primary" onClick={handleClick}>Log out</button>
			 </Nav>
			</Navbar.Collapse>
		  </Container>
		</Navbar>

			<div className="dashboardcontainer">
				{elem == 'parking' && <AdminParking />}
				{elem == 'users' && <AdminUsers />}
			</div>
		</>
	);
}

export default Dashboard;
