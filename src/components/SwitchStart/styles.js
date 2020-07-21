import styled from 'styled-components';

export const SwitchWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;
  display: flex;


  @media only screen and (min-width: 750px) {
    width: 60%;
    height: 400px;
  }

  @media only screen and (max-width: 750px) {
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin: 20px;
    flex-direction: column;
  }
`;

export const Slider = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease 0s;
  z-index: 9999;

  @media only screen and (min-width: 750px) {
    width: 50%;
    height: 100%;
    ${(props) => props.active && `margin-left: 50%;`};
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    height: 50%;
    ${(props) => props.active && `margin-top: calc(50vh - 20px);`};
  }
`;

export const ActionWrapper = styled.div`
  color: ${(props) => props.theme.colors.mainColor};
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 750px) {
    width: 50%;
    height: 100%;
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    height: 50%;
  }
`;
