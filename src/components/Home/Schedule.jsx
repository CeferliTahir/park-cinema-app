import { useMemo, useState } from "react";

import CinemaDropdown from "../common/Dropdown/CinemaDropdown";
import LanguageDropdown from "../common/Dropdown/LanguageDropdown";
import DatePickerDropdown from "../common/Dropdown/DatePickerDropdown";

import TableSchedule from "../../components/common/TableSchedule";

import { LANGUAGE_SHORT_MAP } from "../../helpers/constants";
import { sortByTime, resetFilters, formatDate } from "../../helpers/helper";

const Schedule = ({ data }) => {
  const [language, setLanguage] = useState("");
  const [cinema, setCinema] = useState("");
  const [date, setDate] = useState(null);
  const formattedDate = date ? formatDate(date.$d || date) : "";

  const filterDataForDate = formattedDate
    ? data.filter((prev) => prev.dates.includes(formattedDate))
    : data;

  const allTimes = filterDataForDate.flatMap((movie) => movie.times);

  const filteredData = allTimes.filter((item) => {
    const matchLanguage = language
      ? item.lang === LANGUAGE_SHORT_MAP[language]
      : true;
    const matchCinema = cinema ? item.cinema.includes(cinema) : true;
    return matchLanguage && matchCinema;
  });

  const sortedTimes = useMemo(
    () => [...filteredData].sort(sortByTime),
    [filteredData]
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

      <div className="w-full my-10">
        {sortedTimes.length > 0 ? (
          <TableSchedule data={sortedTimes} />
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

export default Schedule;
