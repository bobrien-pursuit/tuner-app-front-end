import { useState, useEffect } from "react";
import Song from "./Song";

const API = import.meta.env.VITE_API_URL;

function Songs() {
  const [ songs, setSongs ] = useState([]);

  useEffect(() => {
    fetch(`${API}/songs`)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        setSongs(res);
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
        <section>
            <table>
                <thead>
                <tr>
                    <th>Favorite</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                    {songs.map((song) => {
                        return <Song key={song.id} song={song} id={song.id} />;
                    })}
                </tbody>
            </table>
        </section>
    </div>
  );
}

export default Songs;