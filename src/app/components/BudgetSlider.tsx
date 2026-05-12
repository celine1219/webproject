import { useState } from 'react';
import { DollarSign } from 'lucide-react';

interface BudgetSliderProps {
  onBudgetChange?: (budget: number) => void;
}

export function BudgetSlider({ onBudgetChange }: BudgetSliderProps) {
  const [budget, setBudget] = useState(50000);
  const min = 10000;
  const max = 200000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setBudget(value);
    if (onBudgetChange) {
      onBudgetChange(value);
    }
  };

  const formatBudget = (value: number): string => {
    if (value >= 10000) {
      return `${(value / 10000).toFixed(0)}만원`;
    }
    return `${(value / 1000).toFixed(0)}천원`;
  };

  const getPercentage = (): number => {
    return ((budget - min) / (max - min)) * 100;
  };

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm text-gray-600">
        <DollarSign className="w-4 h-4" />
        예산 (1인 기준)
      </label>
      <div className="relative px-2">
        <div className="relative pt-8 pb-2">
          <div
            className="absolute top-0 left-0 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl shadow-lg transition-all duration-200 ease-out transform -translate-x-1/2"
            style={{ left: `${getPercentage()}%` }}
          >
            <div className="text-sm font-medium whitespace-nowrap">{formatBudget(budget)}</div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-pink-500"></div>
          </div>

          <input
            type="range"
            min={min}
            max={max}
            step="10000"
            value={budget}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-rose-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-rose-500 [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:cursor-grab [&::-moz-range-thumb]:active:cursor-grabbing"
            style={{
              background: `linear-gradient(to right, rgb(244, 63, 94) 0%, rgb(236, 72, 153) ${getPercentage()}%, rgb(229, 231, 235) ${getPercentage()}%, rgb(229, 231, 235) 100%)`
            }}
          />
        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>1만원</span>
          <span>20만원</span>
        </div>
      </div>
    </div>
  );
}
