import styled from 'styled-components';

export const ItemWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.mainColor};
  padding: 20px;
  display: grid;
  grid-gap: 20px;

  @media only screen and (max-width: 750px) {
    grid-template-areas:
      'code code status status date date'
      'value value value cashback cashback cashback';
    grid-template-columns: repeat(6, 1fr);
  }
  @media only screen and (min-width: 750px) {
    grid-template-areas:
      'code status date value cashback';
    grid-template-columns: repeat(5, 1fr);
  }

  & > div {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.colors.textColor};
  }
`;

export const Code = styled.div`
  grid-area: code;
`;

export const Status = styled.div`
  grid-area: status;
`;

export const Value = styled.div`
  grid-area: value;
`;

export const Date = styled.div`
  grid-area: date;
`;

export const Cashback = styled.div`
  grid-area: cashback;
`;

export const CashbackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  display: block;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;
