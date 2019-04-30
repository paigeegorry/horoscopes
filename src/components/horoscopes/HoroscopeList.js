import React from 'react';
import PropTypes from 'prop-types';

export default function HoroscopeList({ horoscope }) {
  console.log('horoscope', horoscope);
  return (
    <>
      <h2>{horoscope.sunsign} Horoscope</h2>
      <h3>{horoscope.date}</h3>
      <p>{horoscope.horoscope}</p>
    </>
  );
}

HoroscopeList.propTypes = {
  horoscope: PropTypes.object
};
