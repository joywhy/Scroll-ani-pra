import './App.css';

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

  return <div className="App"></div>;
}

export default App;
