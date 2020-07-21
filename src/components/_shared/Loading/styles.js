import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const LoadingWrapper = styled.div`
  background-color: ${(props) =>
    props.theme.colors.bgColor +
    '80'}; /* 50% of opacity with alpha hexadecimal */
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  & img {
    animation: ${Spin} 1.5s linear infinite;
  }
`;
