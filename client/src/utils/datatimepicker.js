import React, { useState } from "react";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const DateTime = (props) => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 7)
  );

  const isNotSunday = (date) => {
    const day = getDay(date);
    return day !== 0;
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        minDate={subDays(new Date(), 0)}
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
