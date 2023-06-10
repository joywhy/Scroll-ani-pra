import React from 'react';
import { MainLayout } from './HomePage.styled';
import AnimationTest from './components/AnimationTest';
//스크롤할 때마다 event object가 콘솔창에 찍히는 것을 확인할 수 있다
function HomePage() {
  return (
    <MainLayout>
      <AnimationTest />
    </MainLayout>
  );
}

export default HomePage;
