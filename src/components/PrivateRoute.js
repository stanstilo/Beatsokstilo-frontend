import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  isAuthenticatedSelector,
  isLoadingSelector,
} from "../store/reducers/selector";

import { createStructuredSelector } from "reselect";
import {checkIfUserIsLoggedIn} from './utility'

const PrivateRoute = ({
  render: Component,
  isLoading,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      render={(props) => {
        if (isLoading) {
          return <div>Loading....</div>;
        } else if (!checkIfUserIsLoggedIn && !isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        } else {
          return <Component {...props} />;
        }
      }}
      {...rest}
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoading: isLoadingSelector,
  isAuthenticated: isAuthenticatedSelector,
});

export default connect(mapStateToProps)(PrivateRoute);
