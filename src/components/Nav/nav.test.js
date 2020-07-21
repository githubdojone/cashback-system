import React from "react";
import { wait, act, fireEvent } from "@testing-library/react";

import { customProviderRender } from "../../setupTests";
import Nav from ".";

test("Component should render", () => {
  const { getByText } = customProviderRender(<Nav />);

  getByText("Cashback");
  getByText("Sair");
});

test("Component should have clickable button", async () => {
  const { getByText } = customProviderRender(<Nav />);

  await wait(() => {
    act(() => {
      fireEvent.click(getByText("Sair"));
    });
  });
});
