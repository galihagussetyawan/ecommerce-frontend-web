import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Homepage from './pages/Home/HomePage';
import Admin from './pages/Admin/Admin';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

//import services
import AuthenticationService from './services/AuthenticationService';

//import context
import AuthContext, { AuthProvider } from './components/contexts/AuthContext';

// import routes
import PrivateRoute from './components/route/PrivateRoute';
import PublicRoute from './components/route/PublicRoute';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isAuthenticated: AuthenticationService.isAuthenticated() }
  }

  render() {
    return (
      <Router basename="/">
        <div className="max-w-full overflow-hidden">

          <Switch>
            <AuthProvider>
              {/* <Route exact path="/" component={Homepage} /> */}
              {/* <Route path="/register" component={Register} /> */}
              {/* <PrivateRoute path="/admin" component={Admin} /> */}
              <PublicRoute restricted={false} component={Homepage} path="/" exact />
              <PublicRoute restricted={true} component={Register} path="/register" exact />
              <PublicRoute restricted={false} component={Login} path="/login" exact />
              <PrivateRoute component={Admin} path="/dashboard" exact />
            </AuthProvider>
          </Switch>

        </div>
      </Router>
    )
  }
}
