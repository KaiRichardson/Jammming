import React, { useState, useEffect } from "react";

import SearchBar from "../search-bar/search-bar";
import SearchResults from "../search-results/search-results";
import Playlist from "../playlist/playlist";
import "./main.css";

function Main() {
	return (
		// <div classNameName='container'>
		// 	<header classNameName='header'>JAMMMING</header>
		// 	<div classNameName='content'>body</div>
		// 	<footer classNameName='footer'>footer</footer>
		// </div>
		<div className='container'>
			<div className='header'>
				<h2>JAMMMING</h2>
			</div>

			<div className='search-bar'>
				<SearchBar />
			</div>

			<div className='search-results'>
				<SearchResults />
			</div>

			<div className='playlist'>
				<Playlist />
			</div>

			<div className='footer'>
				<h4>Footer</h4>
			</div>
		</div>
	);
}

export default Main;
