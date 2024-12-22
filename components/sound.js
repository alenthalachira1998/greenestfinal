import React, { useState, useEffect, useRef } from "react";
import { BiVolumeFull } from "react-icons/bi";
import { BiVolumeMute } from "react-icons/bi";

const useAudio = (url) => {
  const audioRef = useRef(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying((prev) => !prev);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = async () => {
      try {
        if (playing) {
          await audio.play();
        } else {
          audio.pause();
        }
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    };

    playAudio();
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setPlaying(false);

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle} aria-label={playing ? "Pause audio" : "Play audio"}>
        {playing ? (
          <BiVolumeFull
            className="text-xl lg:text-2xl text-gray-600 animate-pulse"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "sideways-right",
            }}
          />
        ) : (
          <BiVolumeMute className="lg:text-xl text-base text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default Player;
