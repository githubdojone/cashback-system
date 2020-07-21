import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  display: grid;
  grid-gap: 20px;
`;

export const Message = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: center;
  color: ${(props) => props.theme.colors.textInput};
`;
