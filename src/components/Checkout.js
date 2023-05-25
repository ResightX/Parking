import './styles/Checkout.css';
import Cookies from 'js-cookie';
import axios from 'axios';

function Item(e) {
	return (
		<>
			<div className="item">
			  <span className="price">200</span>
			  <div className="item-name">{e.title}</div>
			</div>
		</>
	);
}

function Checkout(){
	const selectedLots = JSON.parse(sessionStorage.getItem('selectedLots'));

	function getData(){
		console.log(typeof(selectedLots));
		console.log((selectedLots));
	}

	function handlePayment(){
		axios.post('http://localhost:3001/api/payment', {
			selectedLots: selectedLots,
			name: Cookies.get('AuthName')
		}).then(res => {
			console.log(res);
		})
	}

	return (
    <section className="payment-form dark">
      <div className="container">
        <div className="block-heading">
          <h2>Оплата</h2>
        </div>
        <form>
          <div className="products">
            <h3 className="title">Оплата</h3>
			{selectedLots.map((e) => (
				<Item title={e} />
			))}
            <div className="total">
              Всего<span className="price">$320</span>
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
                />
              </div>
              <div className="form-group col-sm-5">
                <label htmlFor="">Срок действия</label>
                <div className="input-group expiration-date">
                  <input type="text" className="form-control" placeholder="ДД" aria-label="MM" aria-describedby="basic-addon1" />
                  <span className="date-separator">/</span>
                  <input type="text" className="form-control" placeholder="ГГ" aria-label="YY" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div className="form-group col-sm-8">
                <label htmlFor="card-number">Номер карты</label>
                <input
                  id="card-number"
                  type="text"
                  className="form-control"
                  placeholder="Номер карты"
                  aria-label="Card Holder"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="cvc">CVC</label>
                <input id="cvc" type="text" className="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1" />
              </div>
              <div className="form-group col-sm-12">
                <button type="button" className="btn btn-primary btn-block" onClick={handlePayment}>
                  Оплатить
                </button>
                <button type="button" className="btncancel btn btn-primary btn-block">
				  Отменить
                </button>
                <button type="button" className="" onClick={getData}>getData</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};


export default Checkout;
