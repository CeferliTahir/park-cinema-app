import { useState } from "react";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import dateSvg from "../../../assets/icons/Date.svg";

const DatePickerDropdown = ({ date, setDate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    setIsOpen(false);
  };

  return (
    <div className="group w-full flex items-center pt-1 border-b border-b-0001 hover:border-b-[2px] relative">
      <div
        className="flex items-center relative w-full justify-center px-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white italic">
          {date ? date.toLocaleDateString() : "Bugün"}
        </span>
        <img className="w-5 h-5 absolute right-0" src={dateSvg} alt="date" />
      </div>
      {isOpen && (
        <div className="absolute top-full  z-[10000]">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={handleSelect}
            className="bg-white p-4 rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerDropdown;
