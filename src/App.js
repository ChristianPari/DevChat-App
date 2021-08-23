import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Join from './pages/Join/Join';
import Chat from './pages/Chat/Chat';

const App = () => (
  <Router>
    <Route path="/DevChat-App" exact component={Join} />
    <Route path="/chat" exact component={Chat} />
  </Router>
);

export default App;
