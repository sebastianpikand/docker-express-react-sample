import React from 'react';

import styles from './_button.module.scss';
const { btn, buttonIcon, btn__rightIcon } = styles;

const Button = ({
  type = 'button',
  style = 'btn-primary',
  size = 'btn-reg',
  btnblock = false,
  rightIcon = undefined,
  CTA,
  ...otherProps
}) => {
  return (
    <button
      type={type}
      className={`${btn} ${styles[size]} ${styles[style]} ${btnblock && styles['btn-block']}`}
      {...otherProps}
    >
      {CTA}
      {rightIcon && <span className={`${buttonIcon} ${btn__rightIcon} ${rightIcon}`}></span>}
    </button>
  );
};

export default Button;
