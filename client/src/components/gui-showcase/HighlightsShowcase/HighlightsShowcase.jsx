import React from 'react';

import {
  highlight,
  highlight__light,
  highlight__regular,
  highlight__bordered,
  highlight__active,
} from './_highlightsShowcase.module.scss';

const ShadowsShowcase = () => {
  return (
    <div className="styles-row showcase-display-section">
      <div className="styles-row__style-wrapper">
        <div className={`${highlight} ${highlight__light}`}></div>
        <h5 className="mb-4">highlight light</h5>
      </div>

      <div className="styles-row__style-wrapper">
        <div className={`${highlight} ${highlight__regular}`}></div>
        <h5 className="mb-4">highlight regular</h5>
      </div>

      <div className="styles-row__style-wrapper">
        <div className={`${highlight} ${highlight__bordered}`}></div>
        <h5 className="mb-4">highlight bordered</h5>
      </div>

      <div className="styles-row__style-wrapper">
        <div className={`${highlight} ${highlight__active}`}></div>
        <h5 className="mb-4">highlight active</h5>
      </div>
    </div>
  );
};

export default ShadowsShowcase;
