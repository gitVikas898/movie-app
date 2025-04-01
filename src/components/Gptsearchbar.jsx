import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import languages from "../utils/languages";
import client from "../utils/OpenAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchResults } from "../utils/gptSlice";

const Gptsearchbar = () => {
  const { language } = useSelector((store) => store.config);
  const searchQuery = useRef(null);
  const dispatch = useDispatch();

  const searchTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    return data.json();
  };

  const handleGptSearch = async () => {
    if (!searchQuery.current.value) return;

    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query "${searchQuery.current.value}". Only return 10 movie names, comma-separated (e.g., Sholay, Andaz Apna Apna, Hera Pheri).`;

    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o-mini",
    });

    const result = gptResults.choices[0].message.content.split(",");
    const promiseArray = result.map((movie) => searchTMDB(movie));
    const searchResult = await Promise.all(promiseArray);

    dispatch(addGptSearchResults({ movieNames: result, GptMovies: searchResult }));
  };

  return (
    <div className="flex items-center justify-center w-full px-4 relative">
      <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-xl">
        <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <input
            ref={searchQuery}
            type="text"
            className="p-3 w-full outline-none text-gray-800 text-lg"
            placeholder={languages[language].placeholder}
          />
          <button
            className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 font-semibold hover:bg-red-700 transition-all"
            onClick={handleGptSearch}
          >
            {languages[language].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Gptsearchbar;
