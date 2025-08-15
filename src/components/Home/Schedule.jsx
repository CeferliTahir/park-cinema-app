import { useMemo, useState } from "react";
import FilterBar from "../common/FilterBar";
import { LANGUAGE_SHORT_MAP } from "../../helpers/constants";
import { sortByTime, formatDate } from "../../helpers/helper";
import TableSchedule from "../../components/common/TableSchedule";

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
      <FilterBar
        language={language}
        setLanguage={setLanguage}
        cinema={cinema}
        setCinema={setCinema}
        date={date}
        setDate={setDate}
      />

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
