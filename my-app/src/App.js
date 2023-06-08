import './App.css';
import galssUrl from './glass.png';
import styled from 'styled-components';
import React, { useEffect } from 'react';

// window.addEventListener(
//   'scroll',
//   () => {
//     document.body.style.setProperty(
//       '--scroll',
//       window.pageYOffset / (document.body.offsetHeight - window.innerHeight),
//     );
//   },
//   false,
// );

const Container = styled.div`
  width: 100%;
  height: 1000px;
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
  animation: rotate 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);
`;
function App() {
  useEffect(() => {});
  return (
    <Container>
      <Galss src={galssUrl} alt="잔" />
    </Container>
  );
}

export default App;
