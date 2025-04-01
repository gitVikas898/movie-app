import React from "react";
import Gptsearchbar from "./Gptsearchbar";
import Gptsuggestions from "./Gptsuggestions";
import { BACKGROUND_URL } from "../utils/constants";

const Gptsearch = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BACKGROUND_URL})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]"></div>

      {/* Content Container */}
      <div className="relative w-full flex flex-col items-center px-4">
        {/* Search Bar */}
        <div className="w-full max-w-3xl mt-16 md:mt-20 lg:mt-24">
          <Gptsearchbar />
        </div>

        {/* Suggestions Section */}
        <div className="w-full max-w-5xl mt-12 md:mt-16 lg:mt-24">
          <Gptsuggestions />
        </div>
      </div>
    </div>
  );
};

export default Gptsearch;
