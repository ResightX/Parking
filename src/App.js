import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { render } from 'react-dom';
import Cookies from 'js-cookie';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import SingIn from './components/SignIn.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Test from './components/Test.js';
import ShoppingCart from './components/ShoppingCart.js';
import Account from './components/Account.js';
import Admin from './components/Admin.js';

function HeaderCondition(){
	if (window.location.pathname !== "/admin" && window.location.pathname !== "/dashboard")
		return (
			<Header />
		);

	return null;
}

function FooterCondition(){
	if (window.location.pathname !== "/admin" && window.location.pathname !== "/dashboard")
		return (
		  <div className="footer">
			  <Footer />
		  </div>
		);

	return null;
}

function AccountCondition(){
	if (Cookies.get("AuthName") != undefined){
		window.location.href = "/signup";
	}

	return (
		<div className="account">
			<Account />
		</div>
	);
}

function App() {
  const [auth, setAuth] = useState(false);

  return (
	  <BrowserRouter>
		  <HeaderCondition />

		  <main>
			  <Container>
					<Routes>
					  <Route path='/' index element={ <Home /> }></Route>
					  <Route path='signup' element={ <SingIn className="signinform" /> }></Route>
					  <Route path='register' element={ <Register className="registerform" /> }></Route>
					  <Route path='test' element={ <Test /> }></Route>
					  <Route path='shoppingcart' element={ <ShoppingCart /> }></Route>
					  <Route path='profile' element={ <AccountCondition /> }></Route>	
					  <Route path='admin' element={ <Admin /> }></Route>
					</Routes>
			  </Container>
		  </main>



		  <FooterCondition />

	  </BrowserRouter>
  );
}

export default App;
