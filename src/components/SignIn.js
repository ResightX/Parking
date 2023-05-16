import './styles/SignIn.css';
import SignupLogo from '../images/logosignup.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faGoogle, faVk } from '@fortawesome/free-brands-svg-icons' 

function SignIn(){
	return (
<section class="">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card">
          <div class="row g-0">
            <div class="imgcontainer col-md-6 col-lg-5 d-none d-md-block">
              <img src={require('../images/cars-frappe.png')}
                alt="login form" class="img" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5">

                <form>

                  <div class="signuplogocontainer d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" ></i>
                    <span class="h1 fw-bold mb-0"><img className="signuplogo" src={SignupLogo} /></span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3 text-center" >Войдите в ваш аккаунт</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">E-mail адрес</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Пароль</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="button">Вход</button>
                  </div>

                  <p class="smalltext text-muted" href="#!">или</p>
				  <div class="loginicons">
					<FontAwesomeIcon className="loginicon" icon={faVk} />
					<FontAwesomeIcon className="loginicon" icon={faGoogle} />
				  </div>

                  <a class="small smalltext text-muted" href="#!">Забыли пароль?</a>
				  <p class="mb-5 pb-lg-2 text-center" >Не имеете аккаунта? <a href="#!"
                      >Зарегистрироваться</a></p>
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
