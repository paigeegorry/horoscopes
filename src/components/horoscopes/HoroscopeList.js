import React from 'react';
import PropTypes from 'prop-types';

export default function HoroscopeList(horoscopes) {
  console.log('horoscope', horoscopes);
  return (
    <p>{horoscopes.horoscope}</p>
  );
}

HoroscopeList.propTypes = {
  horoscopes: PropTypes.object
};
