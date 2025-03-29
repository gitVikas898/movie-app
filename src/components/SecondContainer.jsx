import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popular = useSelector((store) => store.movies?.popular);
  const trending = useSelector((store) => store.movies?.trending);
  const top = useSelector((store) => store.movies?.topRated);

  return (
    movies && popular && (
      <div className="bg-black text-white px-4 md:px-8 lg:px-12 py-10">
        <div className="relative z-20 -mt-40 md:-mt-48 lg:-mt-56 space-y-10">
          <MovieList title="Now Playing" movies={movies} />
          <MovieList title="Popular" movies={popular} />
          <MovieList title="Trending" movies={trending} />
          <MovieList title="Top Rated" movies={top} />
        </div>
      </div>
    )
  );
};

export default SecondContainer;
