import React from "react";

import {
  ItemWrapper,
  Code,
  Status,
  Date,
  Value,
  Cashback,
  Title,
  CashbackWrapper,
} from "./styles";
import { currencyFormat } from "../../Utils/currencyFormat";

export default function BuyItem({
  code,
  value,
  date,
  percentCashback,
  status,
}) {
  const formatStatus = () => {
    const sts = {
      [-1]: "Reprovado",
      0: "Em análise",
      1: "Aprovado",
    };

    return sts[status];
  };

  const formatValue = (val) => {
    return currencyFormat(Number(val));
  };

  const calcCashback = () => {
    return formatValue(Number(value) * (Number(percentCashback) / 100));
  };

  return (
    <ItemWrapper {...{ status }}>
      <Code>
        <Title>Código</Title>
        {code}
      </Code>
      <Status>
        <Title>Status</Title>
        {formatStatus()}
      </Status>
      <Date>
        <Title>Data</Title>
        {date}
      </Date>
      <Value>
        <Title>Valor</Title>
        {formatValue(value)}
      </Value>
      <Cashback>
        <Title>Cashback</Title>
        <CashbackWrapper>
          {`${percentCashback}% - ${calcCashback()}`}
        </CashbackWrapper>
      </Cashback>
    </ItemWrapper>
  );
}
