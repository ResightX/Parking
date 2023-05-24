import './styles/Map.css';

function Map(){
	return (
		<>
			<h1 className="pageHeader">Наши парковки</h1>
			<div className="google-map-code">
				<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d35923.90485954323!2d37.60031019622752!3d55.75426253511947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x46b54af7b3c14487%3A0xeb597ebb58f7455b!2sKitaygorodskiy%20Proyezd%2C%20Moskva%2C%20109074!3m2!1d55.7514713!2d37.6356888!5e0!3m2!1sen!2sru!4v1684954891823!5m2!1sen!2sru" width="600" height="450"  id="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</>

	);
}

export default Map;
