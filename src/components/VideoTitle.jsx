import { useState } from "react";
import play from "../assets/play.png";
import sign from "../assets/info.png";

const VideoTitle = ({ title, overview }) => {
  const [info, setInfo] = useState(false);

  const handleInfo = () => {
    setInfo((prev) => !prev);
  };

  return (
    <div className="absolute w-full h-screen flex items-center justify-start bg-gradient-to-r from-black/80 to-transparent p-8 sm:p-12 md:p-16 lg:p-20">
      <div className="max-w-[50%] space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
        
        <p className={`text-white text-sm sm:text-base transition-opacity duration-300 ${info ? "opacity-100" : "opacity-0 hidden"}`}>
          {overview}
        </p>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-white text-black font-bold px-4 py-2 rounded-md hover:opacity-80 transition-all">
            <img src={play} alt="Play" className="w-6" /> Play
          </button>

          <button
            onClick={handleInfo}
            className="flex items-center gap-2 bg-gray-300 bg-opacity-20 text-white px-4 py-2 rounded-md hover:bg-opacity-40 transition-all"
          >
            <img src={sign} alt="Info" className="w-6" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
