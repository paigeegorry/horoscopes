import styled from 'styled-components';

export const Header = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Cormorant+Unicase');
  background: rgba(255, 255, 255, 0.4);
  h1 {
    font-family: 'Cormorant Unicase', serif;
    color: black;
    padding-left: 20px;
    font-size: 5em;
    margin-bottom: 5px;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background: rgba(255, 255, 255, 0.4);
  font-family: 'Cormorant Unicase', serif;
  font-size: 1.15em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;

  label {
    margin: 5px 10px 5px 10px;
  }
  select {
    font-family: 'Cormorant Unicase', serif;
    font-size: 1em;
    margin-bottom: 20px;
  }
`;

export const Div = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  background: rgba(255, 255, 255, 0.4);
  margin-bottom: 0px;
  border-top: 1px solid black;
  h2, h3 {
    margin-bottom: 0px;
  }
  font-family: 'Cormorant Unicase', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
  p {
    width: 50vw;
    font-family: 'Open Sans', sans-serif;
  }
`;

export const Main = styled.main`
display: flex;
flex-direction: column;
width: 75vw;
margin: auto;
`;

export const Footer = styled.footer`
  background: rgba(255, 255, 255, 0.4);
  font-family: 'Cormorant Unicase', serif;
  border-top: 1px solid black;
  font-size: 1.5em;
  text-align: center;
  nav {
    padding: 5px;
    display: flex;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: black;
    padding: 10px;

    }
    a:hover {
      color: white;
    }
  }
`;
