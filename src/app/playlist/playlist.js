import logo from "./logo.svg";
import "./playlist.css";

function Playlist() {
	return (
		<div className='Playlist'>
			<header className='Playlist-header'>
				<img src={logo} className='Playlist-logo' alt='logo' />
				<p>
					Edit <code>src/Playlist.js</code> and save to reload.
				</p>
				<a
					className='Playlist-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default Playlist;
