import { CDN_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-40 sm:w-48 md:w-56 lg:w-60 xl:w-64 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <img
        src={CDN_POSTER_URL + posterPath}
        alt="Movie Poster"
        className="w-full h-auto rounded-lg object-cover hover:opacity-90 transition-opacity"
      />
    </div>
  );
};

export default MovieCard;
