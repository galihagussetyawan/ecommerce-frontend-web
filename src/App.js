import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Homepage from './pages/Home/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import CategoryPage from './pages/Category/CategoryPage';
import ProductPage from './pages/Product-Page/ProductPage';
import WhislistPage from './pages/Wishlist/WishlistPage';
import CartPage from './pages/Cart/CartPage';
import ProfilePage from './pages/Profile/ProfilePage';

//import context
import AuthState from './state/AuthState';

// import routes
import PrivateRoute from './components/route/PrivateRoute';
import PublicRoute from './components/route/PublicRoute';

export default class App extends Component {
    render() {
        return (
            <Router basename="/">
                <div className="w-screen h-screen overflow-hidden overflow-y-scroll">

                    <Switch>
                        <AuthState>
                            {/* <Route exact path="/" component={Homepage} /> */}
                            {/* <Route path="/register" component={Register} /> */}
                            {/* <PrivateRoute path="/admin" component={Admin} /> */}
                            <PublicRoute restricted={false} component={Homepage} path="/" exact />
                            <PublicRoute restricted={false} component={CategoryPage} path="/category" />
                            <PublicRoute restricted={false} component={ProductPage} path="/product" />
                            <PublicRoute restricted={true} component={Register} path="/register" redirect="/" />
                            <PublicRoute restricted={true} component={Login} path="/login" redirect="/" />
                            <PrivateRoute component={ProfilePage} path="/user/setting" />
                            <PrivateRoute component={WhislistPage} path="/wishlist" />
                            <PrivateRoute component={CartPage} path="/cart" />
                            <PrivateRoute component={Dashboard} path="/dashboard" />
                        </AuthState>
                    </Switch>

                </div>
            </Router>
        )
    }
}
