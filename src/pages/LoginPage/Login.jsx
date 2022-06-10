import React from "react";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import styles from "./style.module.css";

function Login() {
  return (
    <DefaultLayout>
      <div className={styles.main_container}>
        <LoginComponent />
        <ImageComponent />
      </div>
    </DefaultLayout>
  );
}

export default Login;
