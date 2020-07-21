import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
`;
export const CashBackTotal = styled.div`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 18px;

  & strong {
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
  }
`;
