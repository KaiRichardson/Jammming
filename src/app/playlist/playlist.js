import "./playlist.css";

export default function Playlist({ list }) {
	console.log("list:", list);

	return (
		<div className='playlist'>
			<ul>
				<h3 className='box-title'>Playlist</h3>
				{list.length !== 0 ? (
					list.map((track, index) => (
						<li className='track-item' key={track.id}>
							<div>
								<div className='track-name'>{track.name}</div>
								<div className='track-info'>
									{track.artist} | {track.album}
								</div>
							</div>
							<button className='minus'>-</button>
						</li>
					))
				) : (
					<h4 className='empty'>No tracks in this playlist</h4>
				)}
			</ul>
		</div>
	);
}
