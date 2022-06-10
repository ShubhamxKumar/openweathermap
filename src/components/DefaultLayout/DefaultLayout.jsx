import React from "react";
import styles from "./style.module.css";
import logo from "../../static/images/logo.png";

function DefaultLayout(props) {
  return (
    <div className={styles.page_container}>
      <div className={styles.navbar_main}>
        <img alt="logo" src={logo} />
        <span className={styles.nav_btn_container}>
          <button className={styles.free_trial_btn}>Start Free Trial</button>
          <button className={styles.login_btn}>Login</button>
        </span>
      </div>
      {props.children}
    </div>
  );
}

export default DefaultLayout;
