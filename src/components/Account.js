import './styles/Profile.css';
import Cookie from 'js-cookie';

function Account (){
	const name = Cookie.get('AuthName');

	if (name == undefined){
		window.location.href = '/signup';
	}

	return (
		<>
		  <ul class="nav nav-tabs">
			<li class="nav-item">
			  <a class="nav-link active" data-toggle="tab">Профиль</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" data-toggle="tab">Настройки</a>
			</li>
		  </ul>

		  <div class="tab-content">
			<div id="profile" class="tab-pane fade show active">
				<div class="profile-left">
					<h3 className='pt-4'>{name}</h3>
					<button onClick={() => Cookie.remove('AuthName')} class="btn btn-outline-primary">Выйти</button>
				</div>
				<div class="profile-right"></div>
			</div>
			<div id="settings" class="tab-pane fade">
			  <h3>Settings content</h3>
			  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
		  </div>
		</>
	);
}

export default Account;
