import React from "react";
import classNames from "classnames";
import * as PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = function ({ child, onClick, active, className }) {
  const classes = classNames(s.button, className, { active });
  return (
    <button type="button" className={classes} onClick={onClick}>
      {child}
    </button>
  );
};
Button.propTypes = {
  child: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.func,
  className: PropTypes.func,
};
Button.defaultProps = {
  child: "",
  onClick: () => {},
  active: () => {},
  className: () => {},
};
export default Button;
