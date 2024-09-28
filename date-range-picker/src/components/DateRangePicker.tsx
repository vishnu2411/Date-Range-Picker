import React, { useState } from 'react';
import Calendar from './Calendar';
import PredefinedRanges from './PredefinedRanges';

//defining an interface for predefined range
interface PredefinedRange {
  label: string;
  startDate: Date;
  endDate: Date;
}

//defining an interface for date range pikcer
interface DateRangePickerProps {
  predefinedRanges: PredefinedRange[];
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ predefinedRanges }) => {
  //state definitions
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [displayedRange, setDisplayedRange] = useState<string | null>(null);
  const [isPredefinedSelected, setIsPredefinedSelected] = useState(false);

  //when a start and end date is selectd the states are set for start and end dates, the weekedays and weekends are segregated
  //for logging
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

  //when predefined rnage is selected the start and end dates are set in the state
  //the range is formatted to string for displaying
  //the IsPredefineSelected state is set to True
  const handlePredefinedRangeSelect = (range: PredefinedRange) => {
    setStartDate(range.startDate);
    setEndDate(range.endDate);

    const formattedRange = `${range.startDate.toLocaleDateString()} - ${range.endDate.toLocaleDateString()}`;
    setDisplayedRange(formattedRange);
    setIsPredefinedSelected(true);

    console.log('Predefined Range Selected:', range);
  };

  //when the predefined range is cleared all the dates and ranges are set to null and the sPredefinedSelected is set to false
  const handleClearPredefinedRange = () => {
    setStartDate(null);
    setEndDate(null);
    setDisplayedRange(null);
    setIsPredefinedSelected(false);
  };

  //the button to clear pre defined range is disbaled and enabled only after displaying predefined rnage dates.
  return (
    <div className="date-range-picker">
      <Calendar 
        onDateChange={handleDateChange} 
        disabled={isPredefinedSelected} 
        predefinedRanges={predefinedRanges}
      />
      
      <PredefinedRanges 
        ranges={predefinedRanges} 
        onSelectRange={handlePredefinedRangeSelect} 
      />
      {displayedRange && (
        <div className="selected-range">
          <h4>Selected Range:</h4>
          <p>{displayedRange}</p>
          <button onClick={handleClearPredefinedRange} className="clear-button">
            Clear Predefined Range
          </button>
          
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
