import React from 'react';
import Horoscopes from '../../containers/Horoscopes';
import { Header, Main } from '../../styles/Horoscopes';
import Foot from './Footer';

export default function App() {
  return (
    <Main>
      <Header>
        <h1>Horoscopes</h1>
      </Header>
      <Horoscopes />
      <Foot />
    </Main>
  );
}
