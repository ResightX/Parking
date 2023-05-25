import './styles/Profile.css';
import Cookie from 'js-cookie';
import axios from 'axios';
import React, {useEffect, useRef, useState } from 'react';
import './styles/Account.css';

function Account (){
	const name = Cookie.get('AuthName');
    const profilePic = useRef();
    const [pic, setPic] = useState('');

    function getImage() {
        axios.post('http://localhost:3001/api/images', {
            username: name
        }).then(res => {
            setPic(res.data);
        })
    }

	if (name == undefined){
		window.location.href = '/signup';
	}

    useEffect(() => {
        getImage();
    })

	return (
		<>
		  <ul class="nav nav-tabs">
			<li class="nav-item">
			  <a class="nav-link active" data-toggle="tab">Профиль</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" data-toggle="tab">Заказы</a>
			</li>
		  </ul>

		  <div class="tab-content">
			<div id="profile" class="tab-pane fade show active">
				<div class="profile-left">
					<div class="profile-default-container mt-4"><div class="profile-default">{name.charAt(0).toUpperCase()}</div></div>
					<h3 className='pt-4'>{name}</h3>
					<button onClick={() => { Cookie.remove('AuthName'); window.location.href = '/'; }} class="btn btn-outline-primary">Выйти</button>
				</div>
				<div class="profile-right">
					<h3>Настройки</h3>
		            <form action="">
		              <input type="text" placeholder="Имя" />
		              <input type="submit" class='btn btn-primary disabled' value="Сохранить изменения" />
					</form>
				</div>
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
