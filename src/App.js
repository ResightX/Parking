import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import SingIn from './components/SignIn.js';
import Home from './components/Home.js';

function App() {
  return (
	  <BrowserRouter>
		  <div className="header">
			  <Header />	
		  </div>
	  
		  <main>
			  <Container>
					<Routes>
					  <Route path='/' index element={ <Home /> }></Route>
					  <Route path='signup' element={ <SingIn className="signinform" /> }></Route>
					</Routes>
			  </Container>
		  </main>

		  <div className="footer">
			  <Footer />
		  </div>


	  </BrowserRouter>
  );
}

export default App;
