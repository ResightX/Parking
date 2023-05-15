import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCoffee, faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons' 
import Logo from '../images/somenewlogo.svg'

function Header(){
	return (
	<Navbar className="header">
        <Container>
          <Navbar.Brand href="/">
			<img src={Logo} className="logo" />
		  </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>

          <Nav className="me-right">
            <Nav.Link href="/signup" className="headericontext">Sign In
				<FontAwesomeIcon className="headericons" icon={ faRightToBracket } />
			</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
	);
}

export default Header;
