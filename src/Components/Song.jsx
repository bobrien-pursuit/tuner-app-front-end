import { Link } from "react-router-dom";

function Song({ song, id}) {
    return (
      <tr key={song.id}>
        <Link to={`/songs/${song.id}`} key={song.id}> 
        <td key={song.is_favorite}>
        {song.is_favorite ? (
            <span>🕺🏻</span>
        ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
        )}
        </td>
        <td key={song.id}>
            {song.id}
        </td>
        <td key={song.name}>
        {song.name}
        </td>
        <td key={song.artist}>
        {song.artist}
        </td>
        <td key={song.album}>
        {song.album}
        </td>
        <td key={song.time}>
        {song.time}
        </td>
      </Link>
      </tr>
    )
}

export default Song;