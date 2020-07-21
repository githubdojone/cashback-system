import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin: 15px 0;

  & > input {
    background-color: transparent !important;
    height: 35px;
    padding-left: 10px;
    width: 100%;
    font-size: 15px;
    border-width: 0px 0px 2px;
    border-image: initial;
    border-radius: 0px;
    border-style: solid;
    transition: all 200ms ease 0s;
    border-color: ${(props) => {
      if (props.error) return props.theme.colors.warning;
      if (props.focused) return props.theme.colors.primary;
      return props.theme.colors.inputColor;
    }};
    ${(props) => props.error && `margin-bottom: 15px;`}
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0px;
  opacity: 1;
  padding: 7px 0px 0px;
  transition: all 200ms ease 0s;
  overflow: hidden;
  pointer-events: none;

  color: ${(props) => {
    if (props.error) return props.theme.colors.warning;
    if (props.focused) return props.theme.colors.primary;
    return props.theme.colors.inputColor;
  }};

  font-size: ${(props) => {
    if (props.focused) return "11px";
    return "15px";
  }};

  ${(props) => props.focused && "transform: translate3d(0px, -80%, 0px)"}
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 0px;
  left: 0%;
  color: ${(props) => props.theme.colors.warning};
`;
