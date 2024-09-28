import React from 'react';

interface PredefinedRange {
  label: string;
  startDate: Date;
  endDate: Date;
}

interface PredefinedRangesProps {
  ranges: PredefinedRange[];
  onSelectRange: (range: PredefinedRange) => void;
}

const PredefinedRanges: React.FC<PredefinedRangesProps> = ({ ranges, onSelectRange }) => {
  return (
    <div className="predefined-ranges">
      <h3>Predefined Ranges</h3>
      {ranges.map((range) => (
        <button 
          key={range.label} 
          onClick={() => onSelectRange(range)}
          className="predefined-range-button"
        >
          {range.label}
        </button>
      ))}
    </div>
  );
};

export default PredefinedRanges;
