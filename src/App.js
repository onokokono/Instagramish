import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import SignPage from './Components/Sign/Sign'
import Profile from './Components/Profile/Profile'
import Home from './Components/Home/Home'
import NotFound from './Components/Error/NotFound'

import './Components/Home/Home.css'

function App() {
  return (
    <Router>
      <Switch>
         
        <Route path="/Home" component={Home} ></Route>
        
        <Route path="/Auth" component={SignPage}></Route>
        <Route path="/Auth/:method" component={SignPage}></Route>

        <Route path="/Profile" component={Profile} ></Route>

        <Route component={NotFound} ></Route>

      </Switch>
    </Router>
  );
}

export default App;
