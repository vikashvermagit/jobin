import { useState } from 'react';

export default function PriceRangeSlider() {
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(7000);
  const min = 100;
  const max = 10000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 500);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 500);
    setMaxValue(value);
  };

  const minThumbPosition = ((minValue - min) / (max - min)) * 100;
  const maxThumbPosition = 100 - ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative max-w-xl w-full p-4">
        <div className="relative z-10 h-2">
          <input
            type="range"
            min={min}
            max={max}
            step="100"
            value={minValue}
            onChange={handleMinChange}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0"
            style={{ cursor: 'pointer' }}
          />
          <input
            type="range"
            min={min}
            max={max}
            step="100"
            value={maxValue}
            onChange={handleMaxChange}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0"
            style={{ cursor: 'pointer' }}
          />

          {/* Background track */}
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-gray-200 rounded-md"></div>

          {/* Selected range */}
          <div
            className="absolute top-0 bottom-0 bg-green-300 rounded-md"
            style={{ left: `${minThumbPosition}%`, right: `${maxThumbPosition}%` }}
          ></div>

          {/* Left thumb */}
          <div
            className="absolute w-6 h-6 bg-green-300 rounded-full -mt-2"
            style={{
              left: `${minThumbPosition}%`,
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
            }}
          ></div>

          {/* Right thumb */}
          <div
            className="absolute w-6 h-6 bg-green-300 rounded-full -mt-2"
            style={{
              right: `${maxThumbPosition}%`,
              transform: 'translateX(50%)',
              pointerEvents: 'none',
            }}
          ></div>
        </div>

        <div className="flex justify-between items-center py-5">
          <input
            type="text"
            value={minValue}
            onChange={(e) => setMinValue(Math.min(Number(e.target.value), maxValue - 500))}
            className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
          />
          <input
            type="text"
            value={maxValue}
            onChange={(e) => setMaxValue(Math.max(Number(e.target.value), minValue + 500))}
            className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
          />
        </div>
      </div>
    </div>
  );
}
