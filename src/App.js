import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import AuthState from "./context/Auth/AuthState";
import "antd/dist/antd.css";

function App() {
  return (
    <Fragment>
      <AuthState>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </AuthState>
    </Fragment>
  );
}

export default App;
