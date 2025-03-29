import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies) || [];

  const displayMovie = movies[Math.floor(Math.random() * movies.length)] || [];

  const { original_title, overview, id: movieId } = displayMovie;

  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <VideoBackground movieId={movieId} />
      </div>

      {/* Title Overlay */}
      <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/70 to-transparent">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
