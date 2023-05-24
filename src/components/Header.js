import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCoffee, faCartShopping, faRightToBracket, faBell, faUser } from '@fortawesome/free-solid-svg-icons' 
import Logo from '../images/somenewlogo.svg'
import {Link} from 'react-router-dom';
import Cookie from 'js-cookie';

function isUserLoggedIn() {
	const name = Cookie.get('AuthName');
	console.log('Cookie name ' + `'${name}'`);

	if (name == undefined){
		return (
			<Link to="/signup" className="headericontext">Вход
				<FontAwesomeIcon className="headericons" icon={ faRightToBracket } />
			</Link>
		)
	}

	return (
		<>
			<Link to='/profile' class='authname'>{name}<FontAwesomeIcon icon={faUser} className="ms-1" /></Link>
		</>
	);
}

function Header(){
	return (
	<Navbar className="header">
        <Container>
          <Navbar.Brand href="/">
            <Link to="/">
				<img src={Logo} className="logo" />
			</Link>
		  </Navbar.Brand>

          <Nav className="me-auto">
            <Link to="/" className="ms-1">Главная</Link>
            <Link to="/map" className="ms-3">Карта</Link>
          </Nav>

          <Nav className="me-right">
            <Link to=""><FontAwesomeIcon icon={ faBell } className="me-2" /></Link>
            <Link to="/shoppingcart"><FontAwesomeIcon className="cartshopping" icon={ faCartShopping } className="me-2" /></Link>
			
			{isUserLoggedIn()}
          </Nav>

        </Container>
      </Navbar>
	);
}

export default Header;
