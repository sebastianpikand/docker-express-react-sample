import React from "react";

import { container } from "./container.module.scss";

export default function Container({ children }) {
  return <div className={container}>{children}</div>;
}
