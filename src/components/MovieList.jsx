import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";
import "swiper/css";
import "swiper/css/navigation";

const MovieList = ({ title, movies }) => {
  const swiperRef = useRef(null);

  return (
    movies && (
      <div className="w-full px-6">
        {/* Movie Category Title */}
        <h1 className="text-2xl text-white font-bold mb-3">{title}</h1>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            className="overflow-hidden"
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard posterPath={movie.poster_path} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">
            ◀
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">
            ▶
          </button>
        </div>
      </div>
    )
  );
};

export default MovieList;
