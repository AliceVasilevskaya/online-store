import React from "react";
import styles from "./Preloader.module.css";
import preloader from "../images/preloader.png";

const Preloader = function () {
  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
