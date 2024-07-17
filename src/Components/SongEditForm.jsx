import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function SongEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event)  => {
    setSong({...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({...song, is_favorite: !song.is_favorite });
  };

// Updates song and redirects to show view
const updateSong = () => {
    fetch(`${API}/songs/${id}`, {
        method: "PUT",
        body: JSON.stringify(song),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => navigate(`/songs/${id}`))
    .catch(err => console.log(err))
};

// On page load

useEffect(() => {
    fetch(`${API}/songs/${id}`)
    .then(res => res.json())
    .then(res => setSong(res))
    .catch(err => console.log(err))
}, []);

const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
};

return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Title:</label>
            <input 
                id="name"
                value={song.name}
                type="text"
                onChange={handleTextChange}
                placeholder="Song Title"
                required
            />
            <label htmlFor="artist">Artist</label>
            <input 
                id="artist"
                value={song.artist}
                type="text"
                onChange={handleTextChange}
                placeholder="Artist Name"
                required
            />
            <label htmlFor="album">Album</label>
            <input
                id="album"
                value={song.album}
                type="text"
                onChange={handleTextChange}
                placeholder="Album Title"
                required 
            />
            <label htmlFor="time">Time</label>
            <input 
                id="time"
                value={song.time}
                type="text"
                onChange={handleTextChange}
                placeholder="Time (mm:ss)"
                required
            />
            <label htmlFor="is_favorite">Favorite:</label>
            <input 
                id="is_favorite"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={song.is_favorite}
            />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to={`/songs/${id}`}>
        <button>Cancel</button>
      </Link>
      </div>
    );
}

export default SongEditForm;