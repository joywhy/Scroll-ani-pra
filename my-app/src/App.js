import './App.css';
import galssUrl from './glass.png';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;
const Galss = styled.img`
  width: 100px;
  height: auto;
`;
function App() {
  window.addEventListener(
    'scroll',
    () => {
      document.body.style.setProperty(
        '--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight),
      );
    },
    false,
  );

  return (
    <Container>
      <Galss src={galssUrl} alt="잔" />
    </Container>
  );
}

export default App;
