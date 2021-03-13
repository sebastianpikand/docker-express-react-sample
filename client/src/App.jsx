import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppHome from './pages/AppHome';
import VersionPage from './pages/VersionPage';
import GUIPage from './pages/GUIPage';

export const App = (props) => {
  console.log(props);
  return (
    <Router>
      <Switch>
        <Route path="/version" component={VersionPage} />
        <Route path="/gui" component={GUIPage} />
        <Route path="/" component={AppHome} />
      </Switch>
    </Router>
  );
};

export default App;
