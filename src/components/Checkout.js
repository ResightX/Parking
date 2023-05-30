import './styles/Checkout.css';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';

let tariff = 0;

function Item(e) {
	return (
		<>
			<div className="item">
			  <span className="price">{e.price}₽</span>
			  <div className="item-name">{e.title}</div>
			</div>
		</>
	);
}

function Checkout(){
	const { register, handleSubmit, formState: { errors } } = useForm();
        const [tariff, setTariff] = useState(0);

	const selectedLots = JSON.parse(sessionStorage.getItem('selectedLots'));
	let total = 0;

	function getData(){
		console.log(typeof(selectedLots));
		console.log((selectedLots));
	}

        function getTariff(){
          axios.post('http://localhost:3001/api/get_tariff', {

          }).then(result => {
            setTariff(result.data.tariff);
            console.log(parseInt(result.data.tariff));
          })
        };

	function cancelPayment(){
		sessionStorage.clear();
		window.location.href = '/';
	}

	function handlePayment(){

	}

        useEffect(() => {
          getTariff();
        }, [])

	const onSubmit = (data) => {
		axios.post('http://localhost:3001/api/payment_request', {
			selectedLots: selectedLots,
			username: Cookies.get('AuthName')
		}).then(res => {
			console.log(res);
			sessionStorage.clear();
			window.location.href = '/';
		})
	};

return (
    <section className="payment-form dark">
      <div className="container">
        <div className="block-heading">
          <h2>Оплата</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="products">
            <h3 className="title">Оплата</h3>
            {selectedLots && selectedLots.map((e) => (
              <Item title={e} price={tariff} />
            ))}
            <div className="total">
              <span>Итого</span>
              <span className='float-end'>{tariff * selectedLots.length} ₽</span>
            </div>
          </div>
          <div className="card-details">
            <h3 className="title">Данные карты</h3>
            <div className="row">
              <div className="form-group col-sm-7">
                <label htmlFor="card-holder">Держатель карты</label>
                <input
                  id="card-holder"
                  type="text"
                  className="form-control"
                  placeholder="Держатель карты"
                  aria-label="Card Holder"
                  aria-describedby="basic-addon1"
                  {...register('cardHolder', { required: 'Держатель карты обязателен' })}
                />
                {errors.cardHolder && <p className="errorMsg">{errors.cardHolder.message}</p>}
              </div>
              <div className="form-group col-sm-5">
                <label htmlFor="">Срок действия</label>
                <div className="input-group expiration-date">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ДД"
                    aria-label="MM"
                    aria-describedby="basic-addon1"
                    {...register('expiryDate', { required: 'Срок действия обязателен' })}
                  />
                  <span className="date-separator">/</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ГГ"
                    aria-label="YY"
                    aria-describedby="basic-addon1"
                    {...register('expiryYear', { required: 'Срок действия обязателен' })}
                  />
                </div>
                {errors.expiryDate && <p className="errorMsg">{errors.expiryDate.message}</p>}
                {errors.expiryYear && <p className="errorMsg">{errors.expiryYear.message}</p>}
              </div>
              <div className="form-group col-sm-8">
                <label htmlFor="card-number">Номер карты</label>
                <input
                  id="card-number"
                  type="number"
                  className="form-control"
                  placeholder="Номер карты"
                  aria-label="Card Holder"
                  aria-describedby="basic-addon1"
                  {...register('cardNumber', { required: 'Номер карты обязателен' })}
                />
                {errors.cardNumber && <p className="errorMsg">{errors.cardNumber.message}</p>}
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="cvc">CVC</label>
                <input
                  id="cvc"
                  type="text"
                  className="form-control"
                  placeholder="CVC"
                  aria-label="Card Holder"
                  aria-describedby="basic-addon1"
                  {...register('cvc', { required: 'CVC обязателен' })}
                />
                {errors.cvc && <p className="errorMsg">{errors.cvc.message}</p>}
              </div>
              <div className="form-group col-sm-12">
                <button type="submit" className="btn btn-primary btn-block">
                  Оплатить
                </button>
                <button type="button" className="btncancel btn btn-primary btn-block" onClick={cancelPayment}>
                  Отменить
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};


export default Checkout;
