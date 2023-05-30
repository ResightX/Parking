import './styles/SignIn.css';
import SignupLogo from '../images/logosignup.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faGoogle, faVk } from '@fortawesome/free-brands-svg-icons' 
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import Cookie from 'js-cookie';
import FloatingMessage from './FloatingMessage.js';
import { render } from '@testing-library/react';

function SignIn(){
    const message = useRef();

    const onFinish = (values) => {
        values.preventDefault();
        const username = values.target.username.value;
        const password = values.target.password.value;

        axios.post('http://localhost:3001/api/login_request', {
            username: username,
            password: password
        }).then((response) => {
            if (response.data.validated === true) {
                    console.log('Login Successful');
                    message.current.style.display = 'none';
                    // redirect to home page using router
                    Cookie.set('AuthName', username);
                    window.location.href = '/';
                    render(<FloatingMessage message_type='success' message_text={`Добро пожаловать, ${username}!`} />)
            } else {
                    console.log('Login Failed');
                    render(<FloatingMessage message_type='fail' message_text='Неправильное имя пользователя или пароль!' />)
            }
        })
    }

	return (
<section className="">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="customcard">
          <div className="row g-0">
            <div className="imgcontainer col-md-6 col-lg-5 d-none d-md-block">
              <img src={require('../images/cars-frappe.png')}
                alt="login form" className="img" />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5">

			<form onSubmit={onFinish} method="POST">
                  <div className="signuplogocontainer d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" ></i>
                    <span className="h1 fw-bold mb-0"><img className="signuplogo" src={SignupLogo} /></span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3 text-center" >Войдите в ваш аккаунт</h5>

                  <div className="form-outline mb-4">
					<div className="hiddenmessage alert alert-danger text-center" ref={message} role="alert">Неправильное имя пользователя или пароль!</div>
                    <input type="text" name="username" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">E-mail адрес</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" name="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example27">Пароль</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Вход</button>
                  </div>

                  <p className="smalltext text-muted" href="#!">или</p>
				  <div className="loginicons">
					<FontAwesomeIcon className="loginicon" icon={faVk} />
					<FontAwesomeIcon className="loginicon" icon={faGoogle} />
				  </div>

                  <a className="small smalltext text-muted" href="#!">Забыли пароль?</a>
				  <p className="mb-5 pb-lg-2 text-center" >Не имеете аккаунта? <Link to="/register"
                      >Зарегистрироваться</Link></p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
	);
}

export default SignIn;
