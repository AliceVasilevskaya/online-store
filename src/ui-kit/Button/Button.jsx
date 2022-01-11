import React from "react";
import classNames from "classnames";
import s from "./Button.module.css";

const Button = function ({ child, onClick, disabled, active, className }) {
  const classes = classNames(s.button, className, { active });
  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {child}
    </button>
  );
};

export default Button;
