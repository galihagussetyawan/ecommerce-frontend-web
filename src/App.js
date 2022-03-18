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
import CreateStorePage from './pages/Store/CreateStorePage';

//import context global state
import GlobalState from './state/GlobalStete';

// import routes
import PrivateRoute from './components/route/PrivateRoute';
import PublicRoute from './components/route/PublicRoute';

export default class App extends Component {
    render() {
        return (
            <Router basename="/">
                <div className="w-screen h-screen overflow-hidden overflow-y-scroll">

                    <Switch>
                        <GlobalState>
                            {/* <Route exact path="/" component={Homepage} /> */}
                            {/* <Route path="/register" component={Register} /> */}
                            {/* <PrivateRoute path="/admin" component={Admin} /> */}
                            <PublicRoute restricted={false} role="PUBLIC" component={Homepage} path="/" exact />
                            <PublicRoute restricted={false} role="PUBLIC" component={CategoryPage} path="/category" />
                            <PublicRoute restricted={false} role="PUBLIC" component={ProductPage} path="/product/:id/:name" />
                            <PublicRoute restricted={false} role="PUBLIC" component={Register} path="/register" redirect="/" />
                            <PublicRoute restricted={true} role="BUYER" component={Login} path="/login" redirect="/" />
                            <PrivateRoute component={ProfilePage} role="BUYER" path="/user/setting" />
                            <PrivateRoute component={WhislistPage} role="BUYER" path="/wishlist" />
                            <PrivateRoute component={CartPage} role="BUYER" path="/cart" strict />
                            <PrivateRoute component={Dashboard} role="SELLER" path="/dashboard" />
                            <PrivateRoute component={CreateStorePage} role="BUYER" path="/myshop" />
                        </GlobalState>
                    </Switch>

                </div>
            </Router>
        )
    }
}
