import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import { AppState } from "../reduxStore/reducers";

import setAuthToken from "../utils/setAuthToken";

// we will use this components for the restricted routes which can be accessed after login only
const RestrictedRoute = props => (
  <Fragment>
    {props.isLoggedIn === true ? (
      <Route path={props.path} component={props.component} />
    ) : (
      <Redirect to="/login" from={props.path} />
    )}
  </Fragment>
);

// We will use this component for public routes which cannot be access after login
const PublicRoute = props => (
  <Fragment>
    {props.isLoggedIn === false ? (
      <Route path={props.path} component={props.component} />
    ) : (
      <Redirect to="/dashboard/home" from={props.path} />
    )}
  </Fragment>
);

class AppRoutes extends PureComponent {
  render() {
    const { history } = this.props;
    const auth = this.props.auth;

    //set the token even after page refreshes
    setAuthToken(auth.token ? auth.token : false);

    return (
      <div>
        <Router history={history}>
          <Switch>
            {/* <Redirect exact from="/" to="/login" />
            <PublicRoute
              path="/register"
              component={Register}
              isLoggedIn={auth.isLoggedIn}
            />
            <PublicRoute
              path="/login"
              component={Login}
              isLoggedIn={auth.isLoggedIn}
            />
            <PublicRoute
              path="/forgot-password"
              component={ForgotPassword}
              isLoggedIn={auth.isLoggedIn}
            />
            <PublicRoute
              path="/reset-password"
              component={ResetPassword}
              isLoggedIn={auth.isLoggedIn}
            /> */}

            <Route path="/dashboard">
              <Switch>
                <DashboardLayout>
                  {/* <RestrictedRoute
                    path="/dashboard/home"
                    component={Dashboard}
                    isLoggedIn={auth.isLoggedIn}
                  /> */}
                </DashboardLayout>
              </Switch>
            </Route>

            {/* <Route component={Error404} path="/404" /> */}
            <Redirect from="*" to="/404" />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppRoutes);
