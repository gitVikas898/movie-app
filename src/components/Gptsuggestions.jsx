import React from "react";
import { useSelector } from "react-redux";
import Gptmovielist from "./Gptmovielist";

const Gptsuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovieResults, searchedMovies } = gpt;

  if (!searchedMovies || gptMovieResults.length === 0) return null;

  // Extract the first search result for each recommended movie
  const myMovies = gptMovieResults
    .slice(1) // Skipping index 0
    .map((movie) => movie?.results?.[0])
    .filter((movie) => movie); // Removing undefined/null values

  return (
    <div className="p-6 sm:p-8 md:p-12 flex flex-col items-center">
      <h2 className="text-3xl text-white font-bold mb-6 text-center">
        🎬 Recommended Movies
      </h2>
      <div className="w-full max-w-7xl">
        <Gptmovielist movies={myMovies} />
      </div>
    </div>
  );
};

export default Gptsuggestions;
