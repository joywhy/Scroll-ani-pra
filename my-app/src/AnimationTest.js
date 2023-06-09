import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowScrollEvent } from './hooks/useWindowScrollEvent';
import { checkIsInViewport } from './utils/checkIsInViewport';
import ScrollRevealSlideAnimation from './ScrollRevealSlideAnimation';
const Wrapper = styled.div`
  height: 40rem;
  padding: 1.6rem;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  border: 1px solid rebeccapurple;
`;

//애니에 관한 css
const goup = keyframes`
  from { transform: translateY(5rem); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Text = styled.p`
  //애니메이션 안해야할 때
  ${({ animation }) => !animation && 'transform: translateY(5rem); opacity: 0;'}
  //애니메이션 해야할 때 
  animation: ${({ animation }) => animation && goup} 2s ease-out;
  font-weight: bold;
  font-size: 2rem;
`;

function AnimationTest() {
  const [animation, setAnimation] = useState(false);
  const areaRef = useRef(null);

  const handleScrollAnimation = () => {
    const elementTop = areaRef.current.getBoundingClientRect().top;
    setAnimation(checkIsInViewport(elementTop));
    // return checkIsInViewport(elementTop);
  };

  useWindowScrollEvent(handleScrollAnimation);

  return (
    <Wrapper>
      <ScrollRevealSlideAnimation direction="left">
        <Text ref={areaRef} animation={animation}>
          Testing Animation...
        </Text>
      </ScrollRevealSlideAnimation>
    </Wrapper>
  );
}

export default AnimationTest;
