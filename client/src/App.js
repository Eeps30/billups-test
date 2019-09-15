import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import GamePage from './pages/game/game.component';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GamePage />
      </div>
    </Provider>
  );
}

export default App;
