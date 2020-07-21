import React from "react";
import { Container } from "react-grid-system";

import Button from "../_shared/Button";
import { useAppContext, deleteUser } from "../../contexts/AppContext";

import { NavWrapper, Title } from "./styles";

export default function Nav() {
  const { dispatch } = useAppContext();

  const handleLogout = () => {
    dispatch(deleteUser());
  };

  return (
    <NavWrapper>
      <Container>
        <Title>Cashback</Title>
        <Button onClick={handleLogout}>Sair</Button>
      </Container>
    </NavWrapper>
  );
}
