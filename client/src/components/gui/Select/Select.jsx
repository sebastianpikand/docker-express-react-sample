import React from 'react';

import {
  selectInputWrapper,
  selectInputWrapper__caret,
  selectInputWrapper__caret__iconPosWithLabel,
  selectInputWrapper__caret__iconPosWithoutLabel,
  selectInputWrapper__selectInputLabel,
  selectInputWrapper__selectInputLabel__lg,
  selectInputWrapper__selectInputLabel__reg,
  selectInputWrapper__selectInputLabel__sm,
  selectInputWrapper__selectInputBody,
  selectInputWrapper__selectInputBody__lg,
  selectInputWrapper__selectInputBody__reg,
  selectInputWrapper__selectInputBody__sm,
} from './_select.module.scss';

export const Select = ({
  name,
  label,
  placeholder,
  selectOptions,
  value,
  onChange,
  size = 'reg',
  display = undefined,
  maxWidth = undefined,
  minWidth = undefined,
  marginBottom = undefined,
  marginLeft = undefined,
  flexGrow = undefined,
}) => {
  selectOptions = [{ value: '', label: placeholder ? placeholder : 'Choose an option' }, ...selectOptions];

  const sizeMap = {
    lg: {
      label: selectInputWrapper__selectInputLabel__lg,
      input: selectInputWrapper__selectInputBody__lg,
    },
    reg: {
      label: selectInputWrapper__selectInputLabel__reg,
      input: selectInputWrapper__selectInputBody__reg,
    },
    sm: {
      label: selectInputWrapper__selectInputLabel__sm,
      input: selectInputWrapper__selectInputBody__sm,
    },
  }[size];

  return (
    <div
      className={selectInputWrapper}
      style={{
        maxWidth: maxWidth !== undefined ? maxWidth : '',
        minWidth: minWidth !== undefined ? minWidth : '',
        display: display !== undefined ? display : '',
        marginBottom: marginBottom !== undefined ? marginBottom : '',
        marginLeft: marginLeft !== undefined ? marginLeft : '',
        flexGrow: flexGrow !== undefined ? flexGrow : '',
      }}
    >
      {label && (
        <label className={`${selectInputWrapper__selectInputLabel} ${sizeMap.label}`} htmlFor={name}>
          {label}
        </label>
      )}
      <select
        name={name}
        onChange={(e) => onChange(e.target.value, e.target.name)}
        value={value}
        className={`${selectInputWrapper__selectInputBody} ${sizeMap.input}`}
      >
        {selectOptions.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      <span
        className={`${selectInputWrapper__caret} ${
          label ? selectInputWrapper__caret__iconPosWithLabel : selectInputWrapper__caret__iconPosWithoutLabel
        }`}
      ></span>
    </div>
  );
};
