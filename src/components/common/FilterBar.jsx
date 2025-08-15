import { resetFilters } from "../../helpers/helper";
import CinemaDropdown from "./Dropdown/CinemaDropdown";
import LanguageDropdown from "./Dropdown/LanguageDropdown";
import DatePickerDropdown from "./Dropdown/DatePickerDropdown";

const FilterBar = ({
  language,
  setLanguage,
  cinema,
  setCinema,
  date,
  setDate,
}) => {
  return (
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
  );
};

export default FilterBar;
