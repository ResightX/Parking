import './styles/Dashboard.css';
import Cookies from 'js-cookie';

function Dashboard ({setAuth}){

	function handleClick(){
		window.location.reload();
		Cookies.set('auth', 'false');
		setAuth(false);
	}

	return (
		<>
			<div className="dashboardcontainer">
				<p>
					Dashboard!!!
				</p>
				<button className="btn btn-primary" onClick={handleClick}>Log out</button>
			</div>
		</>
	);
}

export default Dashboard;
