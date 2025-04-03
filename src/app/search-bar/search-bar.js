import React, { useState, useEffect } from "react";
import "./search-bar.css";

function SearchBar() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e) => {
		console.log("Searching for:", e.target.value);
		e.preventDefault();

		// setSearchTerm(e.target.value);

		// const form = e.target;
		// const formData = new FormData(form);

		// fetch('/some-api', { method: form.method, body: formData });
	};

	return (
		<form onSubmit={handleSearch}>
			<h3>Search Bar</h3>

			<input
				type='text'
				// onChange={handleSearch}
				// value={searchTerm}
				placeholder='Enter A Song'
			/>
			<button type='submit'>Search</button>
		</form>
	);
}

export default SearchBar;
