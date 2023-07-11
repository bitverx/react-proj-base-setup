import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

import setAuthToken from "../utils/setAuthToken";

import LoginPage from "../pages/Login";
import ErrorBoundary from "../components/ErrorBoundary";

const axiosInstance = axios.create();

const AppRoutes = ({ auth }) => {
  useEffect(() => {
    //set the token even after page refreshes
    setAuthToken(axiosInstance, auth.token ? auth.token : false);

    axiosInstance.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function (error) {
        if (error.response.status === 401) {
          // logOutUser();
        }
        return Promise.reject(error);
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  // Pass All common props through routes
  const componentProps = {
    Helmet,
    auth,
    axios: axiosInstance,
  };

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" render={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage {...componentProps} />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppRoutes);
