import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCoffee, faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons' 
import Logo from '../images/somenewlogo.svg'
import {Link} from 'react-router-dom';

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
          </Nav>

          <Nav className="me-right">
            <Link to="/signup" className="headericontext">Вход
				<FontAwesomeIcon className="headericons" icon={ faRightToBracket } />
			</Link>
          </Nav>

        </Container>
      </Navbar>
	);
}

export default Header;
