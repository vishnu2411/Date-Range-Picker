import React from 'react';
import DateRangePicker from './components/DateRangePicker';

const App: React.FC = () => {
  const today = new Date();

  //providing a set of predefined ranges for date can be modified further
  const predefinedRanges = [
    {
      label: 'Last 7 Days',
      startDate: new Date(today.setDate(today.getDate() - 7)),
      endDate: new Date(),
    },
    {
      label: 'Last 30 Days',
      startDate: new Date(today.setDate(today.getDate() - 30)),
      endDate: new Date(),
    },
    {
      label: 'Last 60 Days',
      startDate: new Date(today.setDate(today.getDate() - 60)),
      endDate: new Date(),
    },
  ];

  return (
    //Displaying Calendar and Predefined Ranges
    <div className="App">
      <h1>Date Range Picker</h1>
      <DateRangePicker predefinedRanges={predefinedRanges} />
    </div>
  );
};

export default App;
