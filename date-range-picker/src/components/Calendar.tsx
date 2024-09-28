import React, { useState } from 'react';

interface PredefinedRange {
  label: string;
  startDate: Date;
  endDate: Date;
}

interface CalendarProps {
  onDateChange: (start: Date | null, end: Date | null) => void;
  disabled: boolean;
  predefinedRanges: PredefinedRange[];
}

const Calendar: React.FC<CalendarProps> = ({ onDateChange, predefinedRanges}) => {
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
  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay(); 
  const totalDaysToRender = 42;

  const handleDayClick = (day: number) => {
    if (!isWeekend(new Date(year, month, day)) && day > 0) {
      if (selectedStart === null || (selectedEnd !== null && selectedStart !== null)) {
        setSelectedStart(day);
        setSelectedEnd(null);
      } else if (selectedStart !== null && day > selectedStart) {
        setSelectedEnd(day);
        onDateChange(new Date(year, month, selectedStart), new Date(year, month, day));
      }
    }
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handlePrevYear = () => {
    setYear(year - 1);
  };

  const handleNextYear = () => {
    setYear(year + 1);
  };

  const renderDays = () => {
    const daysArray = [];
    const emptyDays = Array(startDay).fill(null);

  
    for (let i = 0; i < emptyDays.length; i++) {
      daysArray.push(<div key={`empty-start-${i}`} className="day empty" />);
    }

    for (let i = 1; i <= days; i++) {
      const date = new Date(year, month, i);
      const isWeekendDay = isWeekend(date);
      const isSelectedDay = 
        selectedStart !== null && selectedEnd !== null &&
        i >= selectedStart && i <= selectedEnd;

      let dayClass = '';

      if (isSelectedDay) {
        dayClass = isWeekendDay ? 'selected-weekend' : 'selected-weekday';
      } else {
        dayClass = isWeekendDay ? 'weekend' : 'weekday';
      }

      daysArray.push(
        <div
          key={i}
          className={`day ${dayClass}`}
          onClick={() => handleDayClick(i)}
        >
          {i}
        </div>
      );
    }


    const totalDaysInGrid = totalDaysToRender - daysArray.length;
    for (let i = 0; i < totalDaysInGrid; i++) {
      daysArray.push(<div key={`empty-end-${i}`} className="day empty" />);
    }

    return daysArray;
  };

  return (
    <div className="calendar">
      <div className="month-year-selector">
        <div className="year-selector">
          <button onClick={handlePrevYear}>Prev Year</button>
          <span className="year-text">{year}</span>
          <button onClick={handleNextYear}>Next Year</button>
        </div>
        <div className="month-selector">
          <button onClick={handlePrevMonth}>Prev Month</button>
          <span className="month-text">{`Month: ${month + 1}`}</span>
          <button onClick={handleNextMonth}>Next Month</button>
        </div>
      </div>
      <div className="days">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
