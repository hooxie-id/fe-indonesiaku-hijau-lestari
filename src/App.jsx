import React from 'react';
import RoutesApp from './routes/RoutesApp';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <RoutesApp />
  </BrowserRouter>
);

export default App;
