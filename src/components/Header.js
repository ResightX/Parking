import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCoffee, faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons' 
import Logo from '../images/somenewlogo.svg'
import {Link} from 'react-router-dom';
import Cookie from 'js-cookie';

function isUserLoggedIn() {
	const name = Cookie.get('AuthName');
	console.log(name);

	if (name == undefined){
		return (
			<Link to="/signup" className="headericontext">Вход
				<FontAwesomeIcon className="headericons" icon={ faRightToBracket } />
			</Link>
		)
	}

	return (
		<>
			<a class='authname'>{name}</a>
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
            <Link to="/test">Test</Link>
          </Nav>

          <Nav className="me-right">
            <Link to="/shoppingcart"><FontAwesomeIcon className="cartshopping" icon={ faCartShopping } /></Link>
			
			{isUserLoggedIn()}
          </Nav>

        </Container>
      </Navbar>
	);
}

export default Header;
