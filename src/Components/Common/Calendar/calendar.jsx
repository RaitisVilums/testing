import React, { useState } from "react";
import { ReactComponent as ArrowLeft } from "../../../Assets/arrow-left-small.svg";
import { ReactComponent as ArrowRight } from "../../../Assets/arrow-right-small.svg";
import Button from "../Button/button";
import "./calendar.styles.scss";

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const getDaysInMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };
  const daysInMonth = getDaysInMonth();
  const startDay = daysInMonth[0].getDay();

  const gridCells = [];
  for (let i = 0; i < 7 * 6; i++) {
    gridCells.push(null);
  }

  daysInMonth.forEach((day, index) => {
    const cellIndex = startDay + index;
    gridCells[cellIndex] = day;
  });

  const handleDateClick = (day) => {
    setSelectedDate(day);
    console.log(day);
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <Button onClick={prevMonth}>
          <ArrowLeft />
        </Button>
        <h1>
          {MONTHS[date.getMonth()]} {date.getFullYear()}
        </h1>
        <Button onClick={nextMonth}>
          <ArrowRight />
        </Button>
      </div>
      <div className="calendar__weekdays">
        {DAYS_OF_WEEK.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="calendar__days">
        {gridCells.map((day, index) => (
          <div
            key={index}
            className={`calendar__day ${
              day &&
              selectedDate &&
              day.toDateString() === selectedDate.toDateString()
                ? "calendar__day--selected"
                : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day ? day.getDate() : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
