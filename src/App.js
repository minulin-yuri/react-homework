import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import { store } from './store/store';
import MyTheme from './variables/myTheme';
import Header from './components/Header/Header';
import Router from './components/Router/Router';

import './App.scss';

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={MyTheme}>
        <div className="App">

          <header>
            <Header />
            <Router />
          </header>

        </div>
      </ThemeProvider >
    </Provider>
  );
}

export default App;
