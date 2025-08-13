import Card from "./Card";
import { useState } from "react";

import CinemaDropdown from "../common/Dropdown/CinemaDropdown";
import LanguageDropdown from "../common/Dropdown/LanguageDropdown";
import DatePickerDropdown from "../common/Dropdown/DatePickerDropdown";

import { resetFilters } from "../../helpers/helper";
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
      <div className="flex items-center gap-6 my-3 max-md:flex-wrap">
        <LanguageDropdown setLanguage={setLanguage} language={language} />
        <CinemaDropdown setCinema={setCinema} cinema={cinema} />
        <DatePickerDropdown setDate={setDate} date={date} />
        {(language || cinema || date) && (
          <button
            onClick={() => resetFilters(setLanguage, setCinema, setDate)}
            className="max-md:w-full text-center max-md:py-2 border border-red-500 rounded px-4 py-3 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
          >
            Təmizlə
          </button>
        )}
      </div>

      <div>
        {filteredData.length > 0 ? (
          <ul className="grid grid-cols-4 gap-14 max-md:gap-8 my-14 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-x-3 max-md:items-center max-md:justify-center">
            {filteredData.map(
              ({ id, posterUrl, title, releaseDate, ageLimit, language }) => (
                <li key={id}>
                  <Card
                    posterUrl={posterUrl}
                    title={title}
                    releaseDate={releaseDate}
                    ageLimit={ageLimit}
                    language={language}
                  />
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
