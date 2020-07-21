import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1040;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease 0s;
`;

export const ModalWrapper = styled.div`
  background-color: ${props => props.theme.colors.mainColor};
  opacity: 1;
  width: 100%;
  z-index: 1050;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 15px 15px 0px 0px;
  transition: all 0.5s ease 0s;
  height: ${props => props.height};
  margin-bottom: ${props => props.marginBottom};
`;

export const Title = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
