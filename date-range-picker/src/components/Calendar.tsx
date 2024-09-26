import React, { useState } from 'react';

interface CalendarProps {
  onDateChange: (start: Date | null, end: Date | null) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateChange }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [selectedStart, setSelectedStart] = useState<number | null>(null);
  const [selectedEnd, setSelectedEnd] = useState<number | null>(null);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const isWeekend = (date: Date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  };

  const days = getDaysInMonth(year, month);
  const weekdays: boolean[] = Array(days).fill(false);
  
  for (let i = 0; i < days; i++) {
    const date = new Date(year, month, i + 1);
    weekdays[i] = !isWeekend(date);
  }

  const handleDayClick = (day: number) => {
    if (weekdays[day - 1]) {
      if (selectedStart === null || (selectedEnd !== null && selectedStart !== null)) {
        setSelectedStart(day);
        setSelectedEnd(null);
      } else if (selectedStart !== null && day > selectedStart) {
        setSelectedEnd(day);
        onDateChange(new Date(year, month, selectedStart), new Date(year, month, day));
      }
    }
  };

  return (
    <div className="calendar">
      <div className="month-selector">
        <button onClick={() => setMonth((prev) => (prev - 1 + 12) % 12)}>Prev</button>
        <span>{`${year} - ${month + 1}`}</span>
        <button onClick={() => setMonth((prev) => (prev + 1) % 12)}>Next</button>
      </div>
      <div className="days">
        {Array.from({ length: days }, (_, i) => {
          const date = new Date(year, month, i + 1);
          const isWeekendDay = isWeekend(date);
          const isSelectedDay = 
            selectedStart !== null && selectedEnd !== null &&
            i + 1 >= selectedStart && i + 1 <= selectedEnd;

          const dayClass = isSelectedDay 
            ? 'selected' 
            : (weekdays[i] ? 'weekday' : 'weekend');

          return (
            <div
              key={i}
              className={`day ${dayClass} ${isWeekendDay ? 'weekend' : ''}`}
              onClick={() => handleDayClick(i + 1)}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
