import Gptmoviecard from "./Gptmoviecard";

const Gptmovielist = ({ movies }) => {

  

  return ( 
    movies &&
    <div className="p-8 flex items-center gap-5 bg-black opacity-85 rounded-lg scroll-smooth">
        <div>
            <div className="flex gap-4 ">
                {movies.map((movie) => (
                <Gptmoviecard key={movie.id} posterPath={movie.poster_path} title={movie.title}></Gptmoviecard>
                ))}
            </div>
        </div>
    </div>
   
  );
};

export default Gptmovielist;
