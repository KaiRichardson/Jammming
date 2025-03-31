import logo from "./logo.svg";
import "./tracklist.css";

function Tracklist() {
	return (
		<div className='Tracklist'>
			<header className='Tracklist-header'>
				<img src={logo} className='Tracklist-logo' alt='logo' />
				<p>
					Edit <code>src/Tracklist.js</code> and save to reload.
				</p>
				<a
					className='Tracklist-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default Tracklist;
