import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import useFetch from "../hooks/useFetch";

import { formatDate, formatValue, sortByTime } from "../helpers/helper";
import {
  LANGUAGE_NAME_TO_FLAG,
  LANGUAGE_SHORT_MAP,
} from "../helpers/constants";

import FilterBar from "../components/common/FilterBar";
import TableSchedule from "../components/common/TableSchedule";

const Details = () => {
  const { slug } = useParams();
  const { data, error } = useFetch("/movies");

  const [dataMovies, setDataMovies] = useState(null);
  const [language, setLanguage] = useState("");
  const [cinema, setCinema] = useState("");
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (error) toast.error("Məlumat yüklənərkən xəta baş verdi!");
  }, [error]);

  useEffect(() => {
    if (data && slug) {
      const movie = data.find((item) => item.slug === slug);
      setDataMovies(movie || null);
    }
  }, [data, slug]);

  const formattedDate = date ? formatDate(date.$d || date) : "";

  const filterDataForDate = useMemo(() => {
    if (!dataMovies) return [];
    if (!formattedDate) return [dataMovies];
    return dataMovies.dates?.includes(formattedDate) ? [dataMovies] : [];
  }, [dataMovies, formattedDate]);

  const allTimes = useMemo(
    () => filterDataForDate.flatMap((movie) => movie.times || []),
    [filterDataForDate]
  );

  const filteredData = useMemo(() => {
    return allTimes.filter((item) => {
      const matchLanguage = language
        ? item.lang === LANGUAGE_SHORT_MAP[language]
        : true;
      const matchCinema = cinema ? item.cinema.includes(cinema) : true;
      return matchLanguage && matchCinema;
    });
  }, [allTimes, language, cinema]);

  const sortedTimes = useMemo(
    () => [...filteredData].sort(sortByTime),
    [filteredData]
  );

  const languages = Array.isArray(dataMovies?.language)
    ? dataMovies.language
    : dataMovies?.language
    ? [dataMovies.language]
    : [];

  return (
    <div className="mt-32 text-0001">
      <div className="container">
        <div className="grid grid-cols-2 max-md:flex max-md:flex-col-reverse gap-5 my-10">
          <div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
              {dataMovies?.posterUrl && (
                <div className="rounded-[30px] overflow-hidden max-lg:hidden">
                  <img
                    src={dataMovies.posterUrl}
                    alt={dataMovies.title || ""}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col">
                <h1 className="text-xl font-semibold mt-2">
                  {dataMovies?.title}
                </h1>
                <p className="text-sm my-2">{formatValue(dataMovies?.genre)}</p>

                <div className="mb-4">
                  <p className="font-semibold">Dil</p>
                  <ul className="flex items-center gap-2">
                    {languages.map(
                      (lang, i) =>
                        LANGUAGE_NAME_TO_FLAG[lang] && (
                          <img
                            key={`${lang}-${i}`}
                            src={LANGUAGE_NAME_TO_FLAG[lang]}
                            alt={lang}
                          />
                        )
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="font-semibold">Altyazı</p>
                  <ul className="flex items-center gap-2 text-sm text-red-600 font-semibold">
                    {dataMovies?.subtitles ? (
                      <li>
                        <img
                          src={LANGUAGE_NAME_TO_FLAG["Azerbaijan"]}
                          alt="aze"
                        />
                      </li>
                    ) : (
                      <li>Altyazı yoxdur</li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-col gap-2 max-md:flex-row max-md:justify-between w-full">
                  <div className="flex flex-1 flex-col gap-2">
                    <p>
                      <span className="font-semibold">Müddət:</span>{" "}
                      {dataMovies?.duration}
                    </p>
                    <p>
                      <span className="font-semibold">İl:</span>{" "}
                      {dataMovies?.year}
                    </p>
                    <p>
                      <span className="font-semibold">Ölkə:</span>{" "}
                      {dataMovies?.country}
                    </p>
                    <p>
                      <span className="font-semibold">Rejissor:</span>{" "}
                      {dataMovies?.director}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <p>
                      <span className="font-semibold">Aktyorlar:</span>{" "}
                      {dataMovies?.actors?.join(", ") || "Bilinmir"}
                    </p>
                    <p>
                      <span className="font-semibold">Yaş Həddi:</span>{" "}
                      {dataMovies?.ageLimit}
                    </p>
                    <p>
                      <span className="font-semibold">Nümayiş Tarixi:</span>{" "}
                      {dataMovies?.releaseDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {dataMovies?.description && (
              <div className="mt-10">
                <h2 className="text-0001 leading-relaxed">
                  {dataMovies.description}
                </h2>
              </div>
            )}
          </div>

          {dataMovies?.trailerUrl && (
            <div>
              <div className="w-full aspect-video relative rounded-3xl overflow-hidden">
                <iframe
                  src={dataMovies.trailerUrl}
                  title="Movie Trailer"
                  width="100%"
                  height="100%"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>

        <div className="mb-14">
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
        </div>
      </div>
    </div>
  );
};

export default Details;
