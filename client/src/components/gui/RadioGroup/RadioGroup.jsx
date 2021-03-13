import React from 'react';

import {
  radioGroupWrapper,
  radioGroupWrapper__radioButton,
  radioGroupWrapper__radioButton__checked,
  radioGroupWrapper__radioButton__tickbox,
  radioGroupWrapper__radioButton__paragraph,
  radioGroupWrapper__radioButton__input,
} from './_radioGroup.module.scss';

export const RadioGroup = ({
  name,
  options,
  selected,
  onChange,
  layout = 'inline',
  size = 'reg',
}) => {
  const sizeMap = {}[size];

  return (
    <div>
      {options.map(({ label, value }) => (
        <label
          key={value}
          htmlFor={value}
          className={`${radioGroupWrapper__radioButton} ${
            selected === value && radioGroupWrapper__radioButton__checked
          }`}
        >
          <input
            style={{
              marginLeft: layout === 'inline' ? '1rem' : '',
              marginBottom: layout === 'block' ? '1rem' : '',
            }}
            id={value}
            name={name}
            type="radio"
            checked={selected === value}
            className={radioGroupWrapper__radioButton__input}
            onChange={() => onChange(value)}
          />

          <div className={radioGroupWrapper__radioButton__tickbox}>
            {selected === value && (
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

          <p className={radioGroupWrapper__radioButton__paragraph}>{label}</p>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
