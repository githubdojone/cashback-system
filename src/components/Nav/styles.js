import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.textColor};

  & > div {
    display: flex;
    padding: 30px 0;
    justify-content: space-between;
    align-items: center;

    img {
      max-width: 170px;
    }

    span {
      display: none !important;
    }
  }
`;
export const Title = styled.div`
  color: #fff;
  font-size: 30px;
  font-weigth: bold;
`;
