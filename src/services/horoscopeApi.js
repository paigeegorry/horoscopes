export const getHoroscopeInfo = (time, sign) => {
  /*eslint-disable-next-line*/
  const realTime = time.toLowerCase();
  return fetch(`https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/${realTime}/${sign}`)
    .then(res => res.json());
};
