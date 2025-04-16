import React, { useState } from "react";
import "./search-bar.css";

export default function SearchBar({ sendSearchTerm }) {
	const [searchTerm, setSearchTerm] = useState("");

	function handleClick() {
		sendSearchTerm(searchTerm);
	}

	return (
		<>
			<h3>Search Bar</h3>
			<input
				type='text'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<button onClick={handleClick}>Send Data to Parent</button>
		</>
	);
}
