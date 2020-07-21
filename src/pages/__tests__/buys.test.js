import React from "react";
import { wait, act } from "@testing-library/react";

import { customProviderRender } from "../../setupTests";
import Buys from "../Buys";

test("Component should render itens of list", async () => {
  const { getByText } = customProviderRender(<Buys />);

  await wait(() => {
    act(() => {});
  }, 500); //handle requests on component mound

  getByText("01/04/20"); //first
  getByText(/R\$100.00/); //first
  getByText(/1% - R\$1.00/); //first

  getByText("06/04/20"); //last
  getByText(/R\$600.00/); //last
  getByText(/6% - R\$36.00/); //last
});

test("Component should render header", async () => {
  const { getByText } = customProviderRender(<Buys />);

  await wait(() => {
    act(() => {});
  }, 500); //handle requests on component mound

  getByText(/Cashback acumulado/);
  getByText(/R\$91.00/);
  getByText(/Adicionar compra/);
});
