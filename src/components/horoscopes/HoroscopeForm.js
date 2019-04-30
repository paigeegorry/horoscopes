import React from 'react';
import SortOptions from './SortOptions';
import PropTypes from 'prop-types';

export default function HoroscopeForm({ onSignChange, onTimeChange }) {
  const signList = ['Aries', 'Aquarius', 'Cancer', 'Capricorn', 'Gemini', 'Leo', 
    'Libra', 'Pisces', 'Sagittarius', 'Scorpio', 'Taurus', 'Virgo'];

  const timeList = ['Today', 'Week', 'Month', 'Year'];

  return (
    <form>
      <select onChange={onTimeChange}>
        <SortOptions options={timeList} />
      </select>

      <select onChange={onSignChange}>
        <SortOptions options={signList} />
      </select>
    </form>
  );
}

HoroscopeForm.propTypes = {
  onSignChange: PropTypes.func.isRequired,
  onTimeChange: PropTypes.func.isRequired
};
