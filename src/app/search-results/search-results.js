import logo from "./logo.svg";
import "./search-results.css";

function SearchResults() {
	return (
		<div className='SearchResults'>
			<header className='SearchResults-header'>
				<img src={logo} className='SearchResults-logo' alt='logo' />
				<p>
					Edit <code>src/SearchResults.js</code> and save to reload.
				</p>
				<a
					className='SearchResults-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default SearchResults;
