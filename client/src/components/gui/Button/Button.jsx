import React from "react";
import classNames from "classnames";

import styles from "./button.module.scss";

export default function Button({ title }) {
  return (
    <button className={classNames(styles.btn, styles.btn_priamry)}>
      {title}
    </button>
  );
}
