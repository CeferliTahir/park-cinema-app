import { formatDate } from "../helpers/helper";

const useFilteredMovies = (
  data,
  { language, cinema, date },
  options = { includeDate: true }
) => {
  const formattedDate = date ? formatDate(date.$d || date) : "";

  return data.filter((item) => {
    const matchLanguage = language ? item.language.includes(language) : true;
    const matchCinema = cinema ? item.inCinema.includes(cinema) : true;
    const matchDate = options.includeDate
      ? formattedDate
        ? item.dates.includes(formattedDate)
        : true
      : true;

    return matchLanguage && matchCinema && matchDate;
  });
};

export default useFilteredMovies;
