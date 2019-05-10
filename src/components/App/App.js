import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Wheeler from '../Wheeler/Wheeler';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #E71C3B;
    font-family: Arial;
  }

  a {
    color: white;
    background-color: #000;
    padding: 2px 10px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8em;
    margin: 0 5px;

    &:hover {
      background-color: #fff;
      color: #E71C3B;
    }
  }
`;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 170px);
  justify-content: center;
  grid-gap: 35px;
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;
`;

const sounds = [
  'love-song',
  'mom-ipod-shuffle',
  'dope',
  'disgusting',
  'character',
  'dorks',
  'trash',
  'shitposting',
  'shitty',
  'fucking',
  'no-idea'
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        {sounds.map(sound => {
          return <Wheeler sound={sound} />;
        })}
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
