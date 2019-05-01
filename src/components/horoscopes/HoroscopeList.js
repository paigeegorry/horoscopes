import React from 'react';
import PropTypes from 'prop-types';
import { Div } from '../../styles/Horoscopes';

export default function HoroscopeList({ horoscope }) {
  return (
    <Div>
      <h2>{horoscope.sunsign} Horoscope</h2>
      {horoscope.date && <h3>Date: {horoscope.date}</h3>}
      <p>{horoscope.horoscope}</p>
    </Div>
  );
}

HoroscopeList.propTypes = {
  horoscope: PropTypes.object
};
