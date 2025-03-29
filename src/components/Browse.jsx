import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrending from "../hooks/useTrending";
import useTopRated from "../hooks/useTopRated";
import Gptsearch from "./Gptsearchpage";
import { useSelector } from "react-redux";

const Browse = () => {
  // Fetch Movies
  useNowPlaying();
  usePopularMovies();
  useTrending();
  useTopRated();

  // Show GPT Search or Movie Sections
  const displaySearch = useSelector((store) => store.gpt?.showgptSearch);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Conditional Rendering for Search / Movie Sections */}
      {displaySearch ? (
        <Gptsearch />
      ) : (
        <div className="px-4 md:px-8 lg:px-16">
          <MainContainer />
          <SecondContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
