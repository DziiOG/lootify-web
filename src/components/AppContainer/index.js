import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ProductProvider, ProductConsumer } from "../context";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import HomeContainer from "../pages/Home/containers/HomeContainer";
import WelcomeContainer from "../pages/Welcome/containers/WelcomeContainer";
import AuthenticationRouteContainer from "../pages/AuthenticationRoutes/containers/AuthenticationRouteContainer";
import Navbar from "../pages/Welcome/components/BackgroundImage/welcomeNavbar/navbar";
import Default from "../pages/Default.jsx";
import DetailsContainer from "../pages/Details/containers/DetailsContainer";
import FavoritesContainer from "../pages/Favorites/containers/FavoritesContainer";
import CartContainer from "../pages/Cart/containers/CartContainer";
//import AuthRoute from "../util/AuthRoute";

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <PersistGate loading={null} persistor={this.props.persistor}>
          <ProductProvider>
                <ProductConsumer>
                  {(value) => (
            <Router>
              <div className="welcomeContainer">
                <Navbar value={value}></Navbar>
                  <Switch>
                        <Fragment>
                          <Route
                            path="/home"
                            render={(props)=> (value.isTokenValid() ?  <HomeContainer {...props}/> : <Redirect to="/" /> )}
                          // component={HomeContainer}
                            
                          ></Route>

                      
                          <Route
                            exact
                            path="/"
                            render={(props)=> (value.isTokenValid() ? <Redirect to="/home" /> : <WelcomeContainer {...props}/>)}
                          // component={WelcomeContainer}
                            
                          ></Route>
                          <Route
                            path="/authenticate"
                            render={(props)=> (value.isTokenValid() ? <Redirect to="/home" /> : <AuthenticationRouteContainer {...props}/>)}
                            //component={AuthenticationRouteContainer}
                            
                          ></Route>
                          <Route
                          path="/product/details/:productId"
                          render={(props)=> (
                            value.isTokenValid() === false? <Redirect to="/"/> : <DetailsContainer {...props}/>
                          )}
                          ></Route>
                            <Route
                          path="/user/favorites"
                          render={(props)=> (
                            value.isTokenValid() === false? <Redirect to="/"/> : <FavoritesContainer {...props}/>
                          )}
                          ></Route>
                           <Route
                          path="/user/cart"
                          render={(props)=> (
                            value.isTokenValid() === false? <Redirect to="/"/> : <CartContainer {...props}/>
                          )}
                          ></Route>
                          {}
                        </Fragment>
                  </Switch>
              </div>
            </Router>
                  )}
                </ProductConsumer>
          </ProductProvider>
        </PersistGate>
      </Provider>
    );
  }
}

AppContainer.propTypes = {
  store: PropTypes.object.isRequired,
};

/**
 * 
 * 
 *   <Route path="/details" component={Details}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/searchresults" component={ProductList}></Route>
                <Route component={Default}></Route>
 * 
 */
