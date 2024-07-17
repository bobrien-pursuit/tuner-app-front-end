// DEPENDENCIES
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function SongDetails() {
    const [ song, setSong ] = useState({ 
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,

    });
    let navigate = useNavigate();
    let { id } = useParams();

    // On page load

    useEffect(() => {
        fetch(`${API}/songs/${id}`)
          .then(res => res.json())
          .then(res => {
            console.log(res);
            setSong(res)
          })
          .catch(err => console.log(err))
    }, []);

    // Delete

    const handleDelete = () => {
        fetch(`${API}/songs/${id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(res => navigate('/songs'))
        .catch(err => console.log(err))
    };

  return (
    <article>
        <h3>
        {song.is_favorite ? <span>🕺🏻</span> : null}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {song.name}&nbsp;&nbsp;&nbsp;{song.artist}&nbsp;&nbsp;&nbsp;{song.album}&nbsp;&nbsp;&nbsp;{song.time}
        </h3>
        <div>
          <div>
            {" "}
            <Link to={'/songs'}>
            <button>Back</button>
            </Link>
          </div>
          <div>
            {" "}
            <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
            </Link>
          </div>
          <div>
            {" "}
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
    </article>
  );
}

export default SongDetails