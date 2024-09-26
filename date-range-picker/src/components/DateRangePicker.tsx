import React, { useState } from 'react';
import Calendar from './Calendar';
import PredefinedRanges from './PredefinedRanges';

interface DateRangePickerProps {
  predefinedRanges: string[];
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ predefinedRanges }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  
  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
    
    const weekends: Date[] = [];
    if (start && end) {
      const currentDate = new Date(start);
      while (currentDate <= end) {
        if (currentDate.getDay() === 6 || currentDate.getDay() === 0) {
          weekends.push(new Date(currentDate));
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
    
    console.log([start, end], weekends);
  };

  return (
    <div className="date-range-picker">
      <Calendar onDateChange={handleDateChange} />
      <PredefinedRanges ranges={predefinedRanges} onSelectRange={handleDateChange} />
    </div>
  );
};

export default DateRangePicker;
