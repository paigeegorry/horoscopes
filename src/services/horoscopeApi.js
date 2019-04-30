export const getHoroscopeInfo = () => {
  /*eslint-disable-next-line*/
  return fetch('https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/today/Leo')
    .then(res => res.json());
};
