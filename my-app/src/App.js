import styled from 'styled-components';
import React from 'react';

import AnimationTest from './AnimationTest';
const Container = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
`;

function App() {
  return (
    <Container>
      <AnimationTest backgroundColor="gray" />
      <AnimationTest backgroundColor="#888888" />
      <AnimationTest backgroundColor="yellow" />
    </Container>
  );
}

export default App;
