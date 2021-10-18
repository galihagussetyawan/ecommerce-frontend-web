import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Homepage from './pages/Home/HomePage';
import Admin from './pages/Admin/Admin';
import Register from './pages/Register/Register';

// import components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';

export default function App() {
  const [login, setLogin] = useState(false);

  const handleToggleLogin = () => {
    setLogin(!login)
  };

  return (
    <Router basename="/">
      {login && <Login closeAction={handleToggleLogin} />}
      <div className="max-w-full overflow-hidden">

        {/* route register */}
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>

        {/* {main router} */}
        <Route>
          <Header
            clickLogin={handleToggleLogin}
          />
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
          <Footer />
        </Route>

      </div>
    </Router>
  )
};