import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SongCard from '../SongCard/index.jsx';
import { getSongs } from '../../services/song-service.js';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const songsData = await getSongs();
        setSongs(songsData);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  console.log({songs})

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link to="/" className="text-2xl font-bold text-white hover:underline">
          Songs
        </Link>
        <Link
          to="/"
          className="text-sm font-bold tracking-[2px] hover:underline"
        >
          Show all
        </Link>
      </div>
      <div className="horizontal-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {songs.map((song) => (
          <SongCard
            key={song._id}
            id={song._id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            imageUrl={song.imageUrl}
            url={song.url}
          />
        ))}
      </div>
    </div>
  );
};

export default SongList;
