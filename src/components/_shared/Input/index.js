import React, { useState } from "react";
import { InputWrapper, Label, ErrorMessage } from "./styles";
import MaskedInput from "react-text-mask";

export default function Input(props) {
  const [focused, setFocused] = useState(0);

  const { onFocus, onBlur, id, error, value, mask } = props;
  const placeholder = " ";

  const handleFocus = (e) => {
    setFocused(1);
    onFocus && onFocus(e);
  };

  const handleBlur = (e) => {
    setFocused(value ? 1 : 0);
    onBlur && onBlur(e);
  };

  const inputObj = {
    ...props,
    ...{
      onFocus: handleFocus,
      onBlur: handleBlur,
      name: id,
      placeholder,
      focused,
    },
  };

  return (
    <InputWrapper
      {...{
        focused,
        error,
      }}
    >
      {mask ? <MaskedInput {...inputObj} /> : <input {...inputObj} />}
      <Label
        {...{
          htmlFor: id,
          focused,
          error,
        }}
      >
        {props.label}
      </Label>
      {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
    </InputWrapper>
  );
}
