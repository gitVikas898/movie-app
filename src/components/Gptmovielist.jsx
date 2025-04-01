import Gptmoviecard from "./Gptmoviecard";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gptmovielist = ({ movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="relative bg-black bg-opacity-85 rounded-lg p-6">
      {/* Left Scroll Button (only if movies exist) */}
      {movies.length > 3 && (
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-60 rounded-full hover:bg-opacity-90 transition"
      >
        <ChevronLeft size={30} className="text-white" />
      </button>
      )}

      {/* Movie List - Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-8 py-2 no-scrollbar scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {movies.map((movie) => (
          <Gptmoviecard
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>

      {/* Right Scroll Button (only if movies exist) */}
      {movies.length > 3 && (
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-60 rounded-full hover:bg-opacity-90 transition"
      >
        <ChevronRight size={30} className="text-white" />
      </button>
      )}
    </div>
  );
};



export default Gptmovielist;