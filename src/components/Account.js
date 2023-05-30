import { Tabs, Tab } from 'react-bootstrap';
import Cookie from 'js-cookie';
import axios from 'axios';
import React, {useEffect, useRef, useState } from 'react';
import './styles/Profile.css';

function Account(){
	const name = Cookie.get('AuthName');
	const profilePic = useRef();
	const [pic, setPic] = useState('');
	const [orders, setOrders] = useState([]);

	function fetchOrderData(){
		axios.post('http://localhost:3001/api/get_orders', {
			username: name
		}).then(res => {
			setOrders(res.data);
			console.log(orders);
		})
	}

	useEffect(() => {
		orders.map(order => {
		})
		fetchOrderData();
	}, [])

	return(
		<Tabs defaultActiveKey="profile" className="mt-3">
			<Tab eventKey="profile" title="Профиль">
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
				</div>
			</Tab>

			<Tab eventKey="orders" title="Заказы">
				<div class="tab-content">
					<div id="orders" class="tab-pane fade show active">
						<div className="ordertable">
							<div className="tableinfo">
								<h6>ID заказа</h6>
								<h6>Места</h6>
								<h6>Статус</h6>
								<h6>Дата</h6>
							</div>
							{console.log(orders)}
							{orders && orders.map(order => {
								return <div className='order-record mt-3'>
											<div>{order.id}</div>
											<div>{order.parking_spots}</div>
											<div style={order.status == 'pending' ? {color: 'green'} : {color: 'red', textAlign: 'center'}}>{order.status == 'pending' ? 'Оплачен' : 'Отменен'}</div>
											<div>{order.date}</div>
										</div>;
							})}
					</div>
					</div>
				</div>
			</Tab>
		</Tabs>
	);
}

export default Account;
