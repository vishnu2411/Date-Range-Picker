import React from 'react';
import DateRangePicker from './components/DateRangePicker';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Date Range Picker</h1>
      <DateRangePicker predefinedRanges={["Last 7 Days", "Last 30 Days"]} />
    </div>
  );
};

export default App;
