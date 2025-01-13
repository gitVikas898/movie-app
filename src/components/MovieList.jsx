import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return ( 
    movies &&
    <div className="overflow-x-scroll  grid gap-5  scrollbar-none">
        <h1 className="text-2xl text-white font-semibold">{title}</h1>
        <div>
            <div className="flex gap-4 ">
                {movies.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path}></MovieCard>
                ))}
            </div>
        </div>
    </div>
   
  );
};

export default MovieList;
