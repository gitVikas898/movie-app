import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  useTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailers);

  // Handle missing trailer data
  if (!trailerVideo || !trailerVideo.key) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <p className="text-white text-xl">Trailer not available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Responsive YouTube Iframe */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Improved Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
    </div>
  );
};

export default VideoBackground;
