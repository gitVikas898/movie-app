import { CDN_POSTER_URL } from "../utils/constants";

const Gptmoviecard = ({ title ="default" , posterPath }) => {

  if(!posterPath) return null;

  return (
    <div className="w-32 text-center mr-4 hover:scale-125 transition-all  ease-in-out p-2">
      <img src={CDN_POSTER_URL + posterPath} alt="" className="w-full" />
      <p className="text-white">{title}</p>
    </div>
  );
};

export default Gptmoviecard;
