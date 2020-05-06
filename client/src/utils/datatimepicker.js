import React from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "./style.css";

const DateTime = ({ dateTime, setDateTime }) => {
  const isNotSunday = (date) => {
    const day = getDay(date);
    return day !== 0;
  };

  return (
    <div>
      <DatePicker
        selected={dateTime}
        onChange={(date) => setDateTime(date)}
        showTimeSelect
        timeIntervals={30}
        minDate={new Date()}
        minTime={setHours(setMinutes(new Date(), 0), 7)}
        maxTime={setHours(setMinutes(new Date(), 30), 16)}
        dateFormat="MMMM d, yyyy h:mm aa"
        filterDate={isNotSunday}
        monthsShown={2}
        inline
      />
    </div>
  );
};
export default DateTime;
