import React from 'react';
import SortOptions from './SortOptions';
import PropTypes from 'prop-types';
import { Form } from '../../styles/Horoscopes';

export default function HoroscopeForm({ onSignChange, onTimeChange }) {
  const signList = ['Aries', 'Aquarius', 'Cancer', 'Capricorn', 'Gemini', 'Leo', 
    'Libra', 'Pisces', 'Sagittarius', 'Scorpio', 'Taurus', 'Virgo'];

  const timeList = ['Today', 'Week', 'Month', 'Year'];

  return (
    <Form>
      <label>Choose your zodiac sign: </label>
      <select onChange={onSignChange}>
        <SortOptions options={signList} />
      </select>

      <label> Choose your time frame: </label>
      <select onChange={onTimeChange}>
        <SortOptions options={timeList} />
      </select>
    </Form>
  );
}

HoroscopeForm.propTypes = {
  onSignChange: PropTypes.func.isRequired,
  onTimeChange: PropTypes.func.isRequired
};
