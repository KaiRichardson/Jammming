import logo from "./logo.svg";
import "./search-bar.css";

function SearchBar() {
	return (
		<div className='SearchBar'>
			<header className='SearchBar-header'>
				<img src={logo} className='SearchBar-logo' alt='logo' />
				<p>
					Edit <code>src/SearchBar.js</code> and save to reload.
				</p>
				<a
					className='SearchBar-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default SearchBar;
