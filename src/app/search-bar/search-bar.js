import React, { useState } from "react";
import "./search-bar.css";

export default function SearchBar({ sendSearchTerm }) {
	const [searchTerm, setSearchTerm] = useState("");

	function handleClick() {
		sendSearchTerm(searchTerm);
	}

	return (
		<div className='search-bar-container'>
			<input
				type='text'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<button onClick={handleClick}>Search</button>
		</div>
	);
}
