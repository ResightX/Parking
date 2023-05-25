import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons' 

function Item(e){
  return (
    <div class="card mb-3 mb-lg-0">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <div class="ms-3">
                  <h5>Парковочное место {e.title}</h5>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center">
                <div style={{width: 80}}>
                  <h5 class="mb-0">$$$</h5>
                </div>
                <a href="#!" style={{color: '#cecece'}}><i class="fas fa-trash-alt"></i></a>
              </div>
            </div>
          </div>
    </div>
  );
}

function ShoppingCart(e){
	function handleClick(){
		console.log(e);
	}

	return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#303446' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="customcard">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <a href="#!" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>Назад
                      </a>
                    </h5>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Корзина</p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <a href="#!" className="text-body">
                          </a>
                        </p>
                      </div>
                    </div>
                    <div id="cart-items">
		              <button onClick={handleClick}></button>
                      {/* Cart items will be dynamically added here */}
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="innercard text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Информация о платеже</h5>
                        </div>
                        <p className="small mb-2">Тип карты</p>
						<FontAwesomeIcon className="cardtypeicon" icon={faCcMastercard}></FontAwesomeIcon>
						<FontAwesomeIcon className="cardtypeicon" icon={faCcVisa}></FontAwesomeIcon>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-visa fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-amex fa-2x me-2"></i>
						</a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-paypal fa-2x"></i>
                        </a>
                        <form id="payment-form" className="mt-4">
                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="type-name"
                              className="form-control form-control-lg"
                              size="17"
                              placeholder="E-mail для получения чека"
                              required
                            />
                            <label className="form-label" htmlFor="type-name">
                              E-mail для получения чека
                            </label>
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="type-text"

                              className="form-control form-control-lg"
                              size="17"
                              placeholder="1234 5678 9012 3457"
                              minLength="19"
                              maxLength="19"
                              required
                            />
                            <label className="form-label" htmlFor="type-text">
                             Номер карты 
                            </label>
                          </div>
                          <button type="submit" className="btn btn-light btn-lg w-100 mb-3">
                            Оплата
                          </button>
                        </form>
                      </div>
                    </div>
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

export default ShoppingCart;
