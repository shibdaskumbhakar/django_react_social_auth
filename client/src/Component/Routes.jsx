import React from "react";
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { isLogin } from "./Utils";


export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};






const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/about" component={About} />
    </>
  );
};

export default Routes;