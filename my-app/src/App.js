import './App.css';
import galssUrl from './glass.png';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import HomePage from './HomePage';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  box-sizing: border-box;
`;
const Galss = styled.img`
  width: 100px;
  height: auto;
  border: 1px solid red;
  position: fixed;
  display: block;

  &:hover {
    // width: 200px;
  }
`;

function App() {
  return (
    <Container>
      {/* <Galss src={galssUrl} alt="잔" /> */}
      <HomePage />
    </Container>
  );
}

export default App;
