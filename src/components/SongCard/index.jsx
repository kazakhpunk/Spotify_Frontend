import React, { useEffect, useState } from 'react';
import { RiPlayFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Howl, Howler } from 'howler';

const SongCard = ({ title, artist, album, imageUrl, url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    setSound(new Howl({ src: [url] }));
  }, [url]);

  const playAudio = () => {
    if (isPlaying) {
      sound.stop();
      setIsPlaying(false);
    } else {
      Howler.stop();
      if (sound) sound.stop();
      sound.play();
      setIsPlaying(true);
    }
  };

  return (
    <Link
      to="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group w-60"
    >
      <div className="mb-4 relative flex justify-center items-center">
        <img
          src={imageUrl}
          alt="Album"
          className="w-48 h-48 rounded-xl drop-shadow-2xl"
        />
        <button 
          onClick={playAudio}
          className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out bg-[#65D46E] text-black"
        >
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">{title}</h5>
        <p className="text-gray-400 text-sm">{artist}</p>
        <p className="text-gray-400 text-sm">{album}</p>
      </div>
    </Link>
  );
};

export default SongCard;