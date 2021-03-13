import React from 'react';

import { primaryContainer } from './_primaryContainer.module.scss';

const PrimaryContainer = ({ children }) => {
  return <div className={primaryContainer}>{children}</div>;
};

export default PrimaryContainer;
