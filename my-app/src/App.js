import React from 'react';
import styled from 'styled-components';
import AnimationTest from './components/AnimationTest';

const Container = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
`;

function App() {
  return (
    <Container>
      <AnimationTest />
      {/* inputColor="red"  안됨 */}
      <AnimationTest />
      <AnimationTest />
    </Container>
  );
}

export default App;
