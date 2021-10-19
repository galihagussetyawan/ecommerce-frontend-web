import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Homepage from './pages/Home/HomePage';
import Admin from './pages/Admin/Admin';
import Register from './pages/Register/Register';

// import components
import Login from './components/login/Login';

export default function App() {
  return (
    <Router basename="/">
      <div className="max-w-full overflow-hidden">

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/admin" component={Admin} />
          <Route path="/register" component={Register} />
        </Switch>

      </div>
    </Router>
  )
};