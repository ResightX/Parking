import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCoffee, faCartShopping, faRightToBracket, faBell } from '@fortawesome/free-solid-svg-icons' 
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
			<Link to='/profile' class='authname'>{name}</Link>
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
            <Link to="/">Главная</Link>
            <Link to="/map">Карта</Link>
          </Nav>

          <Nav className="me-right">
            <Link to="/shoppingcart"><FontAwesomeIcon className="cartshopping" icon={ faCartShopping } /></Link>
			
			{isUserLoggedIn()}
            <Link to=""><FontAwesomeIcon icon={ faBell } /></Link>
          </Nav>

        </Container>
      </Navbar>
	);
}

export default Header;
