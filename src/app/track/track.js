import logo from "./logo.svg";
import "./track.css";

function Track() {
	return (
		<div className='Track'>
			<header className='Track-header'>
				<img src={logo} className='Track-logo' alt='logo' />
				<p>
					Edit <code>src/Track.js</code> and save to reload.
				</p>
				<a
					className='Track-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default Track;
