import React from 'react';

import {
  textInputWrapper,
  textInputWrapper__textInputLabel,
  textInputWrapper__textInputLabel__lg,
  textInputWrapper__textInputLabel__reg,
  textInputWrapper__textInputLabel__sm,
  textInputWrapper__textInputBody,
  textInputWrapper__textInputBody__lg,
  textInputWrapper__textInputBody__reg,
  textInputWrapper__textInputBody__sm,
  textInputWrapper__textInputBody__rightIcon,
  textInputWrapper__textInputBody__iconPosWithLabel,
  textInputWrapper__textInputBody__iconPosWithoutLabel,
} from './_TextInput.module.scss';

const TextInput = ({
  type = 'text',
  name,
  label,
  placeholder = '',
  onChange,
  value,
  size = 'reg',
  display = undefined,
  maxWidth = undefined,
  minWidth = undefined,
  marginBottom = undefined,
  marginLeft = undefined,
  flexGrow = undefined,
  rightIcon = undefined,
}) => {
  const sizeMap = {
    lg: { label: textInputWrapper__textInputLabel__lg, input: textInputWrapper__textInputBody__lg },
    reg: {
      label: textInputWrapper__textInputLabel__reg,
      input: textInputWrapper__textInputBody__reg,
    },
    sm: { label: textInputWrapper__textInputLabel__sm, input: textInputWrapper__textInputBody__sm },
  }[size];

  return (
    <div
      className={textInputWrapper}
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
        <label className={`${textInputWrapper__textInputLabel} ${sizeMap.label}`} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        className={`${textInputWrapper__textInputBody} ${sizeMap.input}`}
        style={rightIcon && { paddingRight: '2rem' }}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {rightIcon && (
        <span
          className={`${rightIcon} ${textInputWrapper__textInputBody__rightIcon} ${
            label
              ? textInputWrapper__textInputBody__iconPosWithLabel
              : textInputWrapper__textInputBody__iconPosWithoutLabel
          } gray-text`}
        ></span>
      )}
    </div>
  );
};

export default TextInput;
