import "./search-results.css";

export default function SearchResults({ tracks }) {
	console.log("tracks:", tracks);

	return (
		<div className='searchResults'>
			<ul>
				<h3 className='box-title'>Search Results</h3>
				{tracks.length !== 0 ? (
					tracks.map((track, index) => (
						<li className='track-item' key={track.id}>
							<div>
								<div className='track-name'>{track.name}</div>
								<div className='track-info'>
									{track.artist} | {track.album}
								</div>
							</div>
							<button className='plus'>+</button>
						</li>
					))
				) : (
					<h4 className='empty'>No tracks match your search</h4>
				)}
			</ul>
		</div>
	);
}
