import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowScrollEvent } from './utils/useWindowScrollEvent';
import { checkIsInViewport } from './utils/checkIsInViewport';
import ScrollRevealSlideAnimation from './ScrollRevealSlideAnimation';

function AnimationTest() {
  const [animation, setAnimation] = useState(true);
  const areaRef = useRef(null);

  const handleScrollAnimation = () => {
    const elementTop = areaRef.current.getBoundingClientRect().top;
    setAnimation(checkIsInViewport(elementTop));
  };

  useWindowScrollEvent(handleScrollAnimation);

  return (
    <Wrapper>
      <ScrollRevealSlideAnimation>
        <Text ref={areaRef} animation={animation}>
          Testing Animation...
        </Text>
      </ScrollRevealSlideAnimation>
    </Wrapper>
  );
}

export default AnimationTest;

const Wrapper = styled.div`
  height: 40rem;
  padding: 1.6rem;
`;

const goup = keyframes`
  from { transform: translateY(5rem); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Text = styled.p`
  ${({ animation }) => !animation && 'transform: translateY(5rem); opacity: 0;'}
  animation: ${({ animation }) => animation && goup} 2s ease-out;
  font-weight: bold;
  font-size: 2rem;
`;
