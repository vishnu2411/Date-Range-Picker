import React from 'react';

interface PredefinedRangesProps {
  ranges: string[];
  onSelectRange: (start: Date | null, end: Date | null) => void;
}

const PredefinedRanges: React.FC<PredefinedRangesProps> = ({ ranges, onSelectRange }) => {
  const handleRangeClick = (days: number) => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);
    onSelectRange(startDate, endDate);
  };

  return (
    <div className="predefined-ranges">
      {ranges.map((range, index) => (
        <button key={index} onClick={() => handleRangeClick(range === "Last 7 Days" ? 7 : 30)}>
          {range}
        </button>
      ))}
    </div>
  );
};

export default PredefinedRanges;
