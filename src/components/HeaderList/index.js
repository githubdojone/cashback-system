import React from "react";

import ModalNewBuy from "../ModalNewBuy";
import { currencyFormat } from "../../Utils/currencyFormat";
import { useAppContext } from "../../contexts/AppContext";

import { HeaderWrapper, CashBackTotal } from "./styles";

export default function HeaderList() {
  const { state } = useAppContext();

  const formatCurrenct = (val) => currencyFormat(Number(val));

  return (
    <HeaderWrapper>
      <CashBackTotal>
        <strong>Cashback acumulado</strong>:{" "}
        {formatCurrenct(state.totalCashback)}
      </CashBackTotal>
      <ModalNewBuy />
    </HeaderWrapper>
  );
}
