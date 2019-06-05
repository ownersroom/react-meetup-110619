import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { BreakpointsProvider } from 'shared/breakpoints';
import App from './app';

import 'normalize.css';
import 'typeface-montserrat';

ReactDOM.render(
  <Router>
    <BreakpointsProvider>
      <App />
    </BreakpointsProvider>
  </Router>,
  document.getElementById('root')
);
