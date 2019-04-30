import React from 'react';
import PropTypes from 'prop-types';

export default function SortOptions({ options }) {
  const sortables = options.map(opt => {
    return (
      <option key={opt} value={opt} name={opt}>{opt}</option>
    );
  });
  return (
    <>
      {sortables}
    </>
  );
}

SortOptions.propTypes = {
  options: PropTypes.array.isRequired
};
