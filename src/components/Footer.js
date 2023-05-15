import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faTwitter, faFacebook, faVk, faInstagram } from '@fortawesome/free-brands-svg-icons' 

function Footer(){
	return (
		<div>
			<Container>
				<Row>
					<Col className="socialmedia">
						<p>Social media</p>
						<FontAwesomeIcon className="smicons" icon={faTwitter}/>
						<FontAwesomeIcon className="smicons" icon={faVk}/>
						<FontAwesomeIcon className="smicons" icon={faFacebook}/>
						<FontAwesomeIcon className="smicons" icon={faInstagram}/>
					</Col>
					<Col>
						<p>Hello wolrd</p>
						<p>Hello wolrd</p>
						<p>Hello wolrd</p>
					</Col>
					<Col>
						<p>Hello wolrd</p>
						<p>Hello wolrd</p>
						<p>Hello wolrd</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
