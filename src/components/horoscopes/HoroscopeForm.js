import React from 'react';
import SortOptions from './SortOptions';

export default function HoroscopeForm() {
  const signList = ['Aries', 'Aquarius', 'Cancer', 'Capricorn', 'Gemini', 'Leo', 
    'Libra', 'Pisces', 'Sagittarius', 'Scorpio', 'Taurus', 'Virgo'];

  const timeList = ['Today', 'Week', 'Month', 'Year'];


  return (
    <>
      <select>
        <SortOptions options={signList} />
      </select>

      <select>
        <SortOptions options={timeList} />
      </select>
    </>
  );
}
