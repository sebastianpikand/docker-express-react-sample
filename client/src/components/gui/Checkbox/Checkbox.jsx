import React from 'react';

import {
  checkboxWrapper,
  checkboxWrapper__checkbox,
  checkboxWrapper__checkbox__checked,
  checkboxWrapper__checkbox__tickbox,
  checkboxWrapper__checkbox__paragraph,
  checkboxWrapper__checkbox__input,
} from './_checkbox.module.scss';

const Checkbox = ({
  label,
  value,
  name,
  onChange,
  size = 'reg',
  display = undefined,
  marginBottom = undefined,
  marginLeft = undefined,
  marginRight = undefined,
  flexGrow = undefined,
}) => {
  const sizeMap = {
    lg: {},
    reg: {},
  }[size];

  return (
    <div
      className={checkboxWrapper}
      style={{
        display: display !== undefined ? display : '',
        marginBottom: marginBottom !== undefined ? marginBottom : '',
        marginLeft: marginLeft !== undefined ? marginLeft : '',
        marginRight: marginRight !== undefined ? marginRight : '',
        flexGrow: flexGrow !== undefined ? flexGrow : '',
      }}
    >
      <label
        className={`${checkboxWrapper__checkbox} ${
          value && checkboxWrapper__checkbox__checked
        }`}
      >
        <input
          className={checkboxWrapper__checkbox__input}
          name={name}
          checked={value}
          onChange={onChange}
          type="checkbox"
        />

        <div className={checkboxWrapper__checkbox__tickbox}>
          {value && (
            <svg width="16" height="16" viewBox="0 0 24 24">
              <defs>
                <path
                  id="checkmark"
                  d="M9.06424325,15.0186166 L18.2793551,5.4830228 C18.9017402,4.8389924 19.910826,4.8389924 20.5332111,5.4830228 C21.1555963,6.1270532 21.1555963,7.17123278 20.5332111,7.81526318 L10.1911713,18.5169772 C9.56878612,19.1610076 8.55970039,19.1610076 7.93731523,18.5169772 L3.46678887,13.8909754 C2.84440371,13.246945 2.84440371,12.2027655 3.46678887,11.5587351 C4.08917404,10.9147047 5.09825976,10.9147047 5.72064493,11.5587351 L9.06424325,15.0186166 Z"
                />
              </defs>
              <use fill="#4F46B6" fillRule="evenodd" xlinkHref="#checkmark" />
            </svg>
          )}
        </div>

        <p className={checkboxWrapper__checkbox__paragraph}>{label}</p>
      </label>
    </div>
  );
};

export default Checkbox;
