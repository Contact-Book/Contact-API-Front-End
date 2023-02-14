import Routes from './routes';
import Toast from './components/modals';
import { GlobalStyle } from './Global';
import { useContext } from 'react';
import { AppContext } from './context';

function App() {
  const { show } = useContext(AppContext);

  return (
    <>
      {show && <Toast />}
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
