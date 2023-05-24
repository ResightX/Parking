import './styles/SignIn.css';
import axios from 'axios';
import { useRef } from  'react';
import SignupLogo from '../images/logosignup.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faGoogle, faVk } from '@fortawesome/free-brands-svg-icons' 
import { Link } from 'react-router-dom';;

function Register(){
	const userRef = useRef(null);

	const onFinish = (values) => {
		values.preventDefault();
		const username = values.target.username.value;
		const password = values.target.password.value;

		axios.post('http://localhost:3001/register', {
			username: username,
			password: password
		}).then((response) => {
			if (response.data.registered) {
				console.log('Вы успешно зарегистрировались');
			} else {
				console.log('Пользователь с таким логином уже существует');
			}
		})
	}

	return (
<section class="">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-5">
        <div class="customcard">
          <div class="row g-0">
            <div class="">
              <div class="card-body p-4 p-lg-5">

                <form onSubmit={onFinish}>

                  <div class="signuplogocontainer d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x" ></i>
                    <span class="h1 fw-bold mb-0"><img className="signuplogo" src={SignupLogo} /></span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3 text-center" >Регистрация</h5>

                  <div class="form-outline">
                    <input type="email" name="email" ref={userRef} id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">E-mail адрес</label>
                    <input type="text" name="username" id="form2Example17" class="form-control form-control-lg mt-2" />
                    <label class="form-label" for="form2Example17">Логин</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" name="password" id="form2Example27" class="form-control form-control-lg mt-2" />
                    <label class="form-label" for="form2Example27">Пароль</label>
                    <input type="password" id="form2Example27" class="form-control form-control-lg mt-2" />
                    <label class="form-label" for="form2Example28">Повтор пароля</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button type="submit" class="btn btn-dark btn-lg btn-block">Зарегистрироваться</button>
                  </div>

				  <p class="mb-5 pb-lg-2 text-center" >Уже имеете аккаунт? <Link to="/signup"
                      >Войти</Link></p>
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

export default Register;
