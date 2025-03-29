import { CDN_POSTER_URL } from "../utils/constants";

const Gptmoviecard = ({ title = "Default", posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-40 md:w-48 text-center hover:scale-110 transition-transform ease-in-out duration-300 p-3 bg-gray-900 rounded-lg shadow-lg">
      <img src={CDN_POSTER_URL + posterPath} alt={title} className="w-full rounded-md" />
      <p className="text-white text-sm md:text-base font-semibold mt-2 line-clamp-2">{title}</p>
    </div>
  );
};

export default Gptmoviecard;
