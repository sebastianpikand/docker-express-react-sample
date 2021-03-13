import React from 'react';

import {
  color,
  color__lightBrandPurple,
  color__brandPurple,
  color__lightBrandBlue,
  color__brandBlue,
  //
  color__signalRed,
  color__signalOrange,
  color__signalGreen,
  //
  color__darkGray,
  color__gray,
  color__lightGray,
  color__veryLightGray,
  color__disabledUIGray,
} from './_colorsShowcase.module.scss';

const ColorsShowcase = () => {
  return (
    <React.Fragment>
      <div className="styles-row showcase-display-section">
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__lightBrandPurple}`}></div>
          <h5 className="mb-4">light-brand-purple</h5>
          <p className="body-tiny mb-0 mt-0">#DCDAF0</p>
        </div>
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__brandPurple}`}></div>
          <h5 className="mb-4">brand-purple</h5>
          <p className="body-tiny mb-0 mt-0">#4F46B6</p>
        </div>
      </div>
      <div className="styles-row showcase-display-section">
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__lightBrandBlue}`}></div>
          <h5 className="mb-4">light-brand-blue</h5>
          <p className="body-tiny mb-0 mt-0">#CBEBFC</p>
        </div>
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__brandBlue}`}></div>
          <h5 className="mb-4">brand-blue</h5>
          <p className="body-tiny mb-0 mt-0">#53BDF7</p>
        </div>
      </div>
      <div className="styles-row showcase-display-section">
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__signalRed}`}></div>
          <h5 className="mb-4">light-brand-blue</h5>
          <p className="body-tiny mb-0 mt-0">#F54C4B</p>
        </div>
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__signalOrange}`}></div>
          <h5 className="mb-4">brand-blue</h5>
          <p className="body-tiny mb-0 mt-0">#F9AA01</p>
        </div>
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__signalGreen}`}></div>
          <h5 className="mb-4">brand-blue</h5>
          <p className="body-tiny mb-0 mt-0">#3BB577</p>
        </div>
      </div>
      <div className="styles-row showcase-display-section">
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__darkGray}`}></div>
          <h5 className="mb-4">light-brand-blue</h5>
          <p className="body-tiny mb-0 mt-0">#2F334F</p>
        </div>
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__gray}`}></div>
          <h5 className="mb-4">brand-blue</h5>
          <p className="body-tiny mb-0 mt-0">#71758E</p>
        </div>
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__lightGray}`}></div>
          <h5 className="mb-4">brand-blue</h5>
          <p className="body-tiny mb-0 mt-0">#DDE1FC</p>
        </div>
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__veryLightGray}`}></div>
          <h5 className="mb-4">brand-blue</h5>
          <p className="body-tiny mb-0 mt-0">#EFF1FF</p>
        </div>
        <div className="styles-row__style-wrapper">
          <div className={`${color} ${color__disabledUIGray}`}></div>
          <h5 className="mb-4">brand-blue</h5>
          <p className="body-tiny mb-0 mt-0">#CED4E2</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ColorsShowcase;
