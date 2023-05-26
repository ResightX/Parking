import './styles/SignIn.css';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { useRef } from  'react';
import SignupLogo from '../images/logosignup.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faGoogle, faVk } from '@fortawesome/free-brands-svg-icons' 
import { Link } from 'react-router-dom';;

function Register(){
	const userRef = useRef(null);

	const { control, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		const email = data.email;
		const username = data.username;
		const password = data.password;

		axios.post('http://localhost:3001/api/register', {
			username: username,
			password: password
		}).then((response) => {
			if (response.data.registered) {
				console.log('Вы успешно зарегистрировались');
				window.location.href = '/signup';
			} else {
				alert('Регистрация не прошла');
			}
		})

	};


	const onFinish = (values) => {
		values.preventDefault();
		const email = values.target.email.value;
		const username = values.target.username.value;
		const password = values.target.password.value;

		axios.post('http://localhost:3001/api/register', {
			username: username,
			password: password
		}).then((response) => {
			if (response.data.registered) {
				console.log('Вы успешно зарегистрировались');
			} else {
				console.log('Регистрация не прошла');
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

                <form onSubmit={handleSubmit(onSubmit)}>

                  <div class="signuplogocontainer d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x" ></i>
                    <span class="h1 fw-bold mb-0"><img className="signuplogo" src={SignupLogo} /></span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3 text-center" >Регистрация</h5>

                  <div class="form-outline">
					
					<Controller
					  name="email"
					  control={control}
					  rules={{ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }}
					  render={({ field }) => (
						<div className="form-outline">
						  <input
							{...field}
							type="email"
							id="form2Example17"
							className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
						  />
						  <label className="form-label" htmlFor="form2Example17">E-mail адрес</label>
						  {errors.email && errors.email.type === "required" && (
							<div className="invalid-feedback">Это поле обязательное</div>
						  )}
						  {errors.email && errors.email.type === "pattern" && (
							<div className="invalid-feedback">Введите корректный email</div>
						  )}
						</div>
					  )}
					/>

					<Controller
					  name="username"
					  control={control}
					  rules={{ required: true, minLength: 4, maxLength: 20 }}
					  render={({ field }) => (
						<div className="form-outline">
						  <input
							{...field}
							type="text"
							id="form2Example17"
							className={`form-control form-control-lg ${errors.username ? 'is-invalid' : ''}`}
						  />
						  <label className="form-label" htmlFor="form2Example17">Логин</label>
						  {errors.username && errors.username.type === "required" && (
							<div className="invalid-feedback">Это поле обязательное</div>
						  )}
						  {errors.username && errors.username.type === "minLength" && (
							<div className="invalid-feedback">Длина логина должна быть не менее 5 символов</div>
						  )}
						  {errors.username && errors.username.type === "maxLength" && (
							<div className="invalid-feedback">Длина логина должна быть не более 20 символов</div>
						  )}
						</div>
					  )}
					/>
                  </div>

                  <div class="form-outline mb-4">
					<Controller
					  name="password"
					  control={control}
					  rules={{ required: true, minLength: 8, maxLength: 32 }}
					  render={({ field }) => (
						<div className="form-outline mb-4">
						  <input
							{...field}
							type="password"
							id="form2Example27"
							className={`form-control form-control-lg mt-2 ${errors.password ? 'is-invalid' : ''}`}
						  />
						  <label className="form-label" htmlFor="form2Example27">Пароль</label>
						  {errors.password && errors.password.type === "required" && (
							<div className="invalid-feedback">Это поле обязательное</div>
						  )}
						  {errors.password && errors.password.type === "minLength" && (
							<div className="invalid-feedback">Длина пароля должна быть не менее 8 символов</div>
						  )}
						  {errors.password && errors.password.type === "maxLength" && (
							<div className="invalid-feedback">Длина пароля должна быть не более 32 символов</div>
						  )}
						</div>
					  )}
					/>
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
