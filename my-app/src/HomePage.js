import React, { useEffect } from 'react';
import { MainLayout } from './HomePage.styled';
import AnimationTest from './AnimationTest';
//스크롤할 때마다 event object가 콘솔창에 찍히는 것을 확인할 수 있다
function HomePage({ location }) {
  return (
    <MainLayout>
      <AnimationTest backgroundColor="gray" />
      <AnimationTest backgroundColor="#888888" />
      <AnimationTest backgroundColor="yellow" />
    </MainLayout>
  );
}

export default HomePage;
