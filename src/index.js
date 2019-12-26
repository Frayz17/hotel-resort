import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoomProvider } from 'Context/';

import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <RoomProvider>
    <Router basename="/hotel-resort/">
      <App />
      <GlobalStyles />
    </Router>
  </RoomProvider>,
  document.getElementById('root')
);
