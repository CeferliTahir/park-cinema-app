import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import FilterBar from "../common/FilterBar";
import useFilteredMovies from "../../hooks/useFilteredMovies";

const SoonMovies = ({ data }) => {
  const [language, setLanguage] = useState("");
  const [cinema, setCinema] = useState("");
  const [date, setDate] = useState(null);

  const filteredData = useFilteredMovies(
    data,
    { language, cinema, date },
    { includeDate: false }
  );

  return (
    <>
      <FilterBar
        language={language}
        setLanguage={setLanguage}
        cinema={cinema}
        setCinema={setCinema}
        date={date}
        setDate={setDate}
      />

      <div>
        {filteredData.length > 0 ? (
          <ul className="grid grid-cols-4 gap-14 max-md:gap-8 my-14 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-x-3 max-md:items-center max-md:justify-center">
            {filteredData.map(
              ({
                id,
                posterUrl,
                title,
                releaseDate,
                ageLimit,
                language,
                slug,
              }) => (
                <li key={id}>
                  <Link to={`/movies-details/${slug}`}>
                    <Card
                      posterUrl={posterUrl}
                      title={title}
                      releaseDate={releaseDate}
                      ageLimit={ageLimit}
                      language={language}
                    />
                  </Link>
                </li>
              )
            )}
          </ul>
        ) : (
          <div className="my-16">
            <h1 className="text-2xl font-semibold text-center text-0001">
              Sessiyalar tapılmadı
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default SoonMovies;
