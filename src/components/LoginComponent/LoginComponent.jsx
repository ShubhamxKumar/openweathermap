import React, { useState, useContext, useEffect } from "react";
import styles from "./style.module.css";
import authContext from "../../context/Auth/AuthContext";
import { message } from "antd";

function LoginComponent() {
  const authCtx = useContext(authContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [remember_password, setRememberPassword] = useState(false);
  useEffect(() => {
    const password = localStorage.getItem("x-auth-password");
    if (password) {
      setCredentials({ ...credentials, password: password });
      setRememberPassword(true);
    }
    //eslint-disable-next-line
  }, []);
  const callback = (type, msg) => {
    if (type === "SUCCESS") {
      message.success(msg, 1);
    } else {
      message.error(msg, 1);
    }
  };
  const login = () => {
    if (credentials.email.trim() === "" || credentials.password === "") {
      return message.warning("Please fill out all the fields", 1);
    }
    if (remember_password) {
      localStorage.setItem("x-auth-password", credentials.password);
    } else {
      localStorage.removeItem("x-auth-password");
    }
    authCtx.login(credentials, callback);
  };
  return (
    <div className={styles.main_container}>
      <h1 className={styles.login_heading}> Welcome Back </h1>
      <h6 className={styles.login_subheading}> Sub-title text goes here </h6>
      <input
        className={styles.login_input}
        placeholder="Email Address *"
        value={credentials.email}
        onChange={(e) => {
          setCredentials({ ...credentials, email: e.target.value });
        }}
      />
      <input
        className={styles.login_input}
        placeholder="Password *"
        type="password"
        value={credentials.password}
        onChange={(e) => {
          setCredentials({ ...credentials, password: e.target.value });
        }}
      />
      <button
        className={styles.login_btn}
        onClick={(e) => {
          e.preventDefault();
          login();
        }}
      >
        {" "}
        Login{" "}
      </button>
      <span className={styles.credentials_action_container}>
        <span className={styles.remember_credentials_container}>
          <input
            type="checkbox"
            className={styles.password_checkbox}
            checked={remember_password}
            onChange={(e) => {
              setRememberPassword(!remember_password);
            }}
            name="remember_password"
          />
          <label htmlFor="remember_password"> Remember Password </label>
        </span>
        <button className={styles.forgot_password_btn}>
          {" "}
          Forgot Password?{" "}
        </button>
      </span>
    </div>
  );
}

export default LoginComponent;
