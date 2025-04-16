import React, { useState, useEffect } from "react";

import SearchBar from "../search-bar/search-bar";
import SearchResults from "../search-results/search-results";
import Playlist from "../playlist/playlist";
import Tracks from "./tracks.json";
import "./main.css";

export default function Main() {
	const [tracks, setTracks] = useState(Tracks);
	// console.log(tracks);

	const [list, setList] = useState([]);

	const [searchTerm, setSearchTerm] = useState("");
	const handleSearch = (data) => {
		console.log("data:", data);
		setSearchTerm(data);
		console.log("Searching for:", searchTerm);
	};

	// const [searchResults, setSearchResults] = useState([]);
	// const [playlist, setPlaylist] = useState([]);
	// const [currentTrack, setCurrentTrack] = useState(null);
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState(null);
	// const [isError, setIsError] = useState(false);
	// const [isSuccess, setIsSuccess] = useState(false);
	// const [isEmpty, setIsEmpty] = useState(false);
	// const [isPlaying, setIsPlaying] = useState(false);
	// const [isPaused, setIsPaused] = useState(false);
	// const [isStopped, setIsStopped] = useState(false);

	return (
		<div className='container'>
			<div className='header'>
				<h2>JAMMMING</h2>
			</div>

			<div className='search-bar'>
				<SearchBar sendSearchTerm={handleSearch} />
			</div>

			<div className='search-results'>
				<SearchResults tracks={tracks} />
			</div>

			<div className='playlist'>
				<Playlist list={list} />
			</div>

			<div className='footer'>
				<h4>Footer</h4>
			</div>
		</div>
	);
}
