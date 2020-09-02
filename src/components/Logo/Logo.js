import React from "react";
import classes from "./Logo.module.css";
import quranLogo from "../../assets/images/quran.png";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={quranLogo} alt="Qur'an"></img>
  </div>
);

export default logo;
