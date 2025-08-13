import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState, useEffect, useMemo } from "react";
import { MOVIE_CATEGORIES } from "../helpers/constants";

import Carousel from "../components/Home/Carousel";
import Schedule from "../components/Home/Schedule";
import AllMovies from "../components/Home/AllMovies";
import SoonMovies from "../components/Home/SoonMovies";

const Home = () => {
  const { data, error } = useFetch("/movies");
  const [activeCategory, setActiveCategory] = useState(MOVIE_CATEGORIES.ALL);

  useEffect(() => {
    if (error) {
      toast.error("Məlumat yüklənərkən xəta baş verdi!");
    }
  }, [error]);

  const { inVisionData, notInVisionData } = useMemo(() => {
    const inVision = data?.filter((movie) => movie.inVision) || [];
    const notInVision = data?.filter((movie) => !movie.inVision) || [];
    return { inVisionData: inVision, notInVisionData: notInVision };
  }, [data]);

  const renderContent = () => {
    switch (activeCategory) {
      case MOVIE_CATEGORIES.ALL:
        return <AllMovies data={inVisionData} />;
      case MOVIE_CATEGORIES.SOON:
        return <SoonMovies data={notInVisionData} />;
      case MOVIE_CATEGORIES.SCHEDULE:
        return <Schedule data={inVisionData} />;
      default:
        return null;
    }
  };

  return (
    <>
      <section>
        <div className="max-md:pt-5">
          <Carousel />
        </div>

        <div className="container my-14">
          <ul className="flex items-center gap-5 justify-between text-center mb-10 my-8">
            <li className="text-0001 text-[30px] max-md:text-[26px] max-sm:text-[24px] font-bold w-full flex items-center justify-center [text-shadow:0px_0px_14px_#fff]">
              <Link to="/">Siyahı</Link>
            </li>
            <li className="text-0001 text-[30px] max-md:text-[26px] max-sm:text-[24px] font-bold w-full flex items-center justify-center">
              <Link to="/">Treynerlər</Link>
            </li>
          </ul>

          <ul className="flex items-center gap-5 max-md:justify-center">
            {Object.values(MOVIE_CATEGORIES).map((category) => {
              const isActive = activeCategory === category;
              return (
                <li
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-[20px] cursor-pointer duration-300 text-0001 font-medium ${
                    isActive
                      ? "underline underline-offset-[6px] opacity-100"
                      : "opacity-55"
                  }`}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="container w-full">{renderContent()}</div>
      </section>
    </>
  );
};

export default Home;
