export const getBuys = () => {
  return new Promise((res) => {
    res({
      data: [
        {
          code: 1,
          value: 100,
          date: "01/04/20",
          percentCashback: 1,
          status: -1,
        },
        {
          code: 2,
          value: 200,
          date: "02/04/20",
          percentCashback: 2,
          status: 0,
        },
        {
          code: 3,
          value: 300,
          date: "03/04/20",
          percentCashback: 3,
          status: 1,
        },
        {
          code: 4,
          value: 400,
          date: "04/04/20",
          percentCashback: 4,
          status: -1,
        },
        {
          code: 5,
          value: 500,
          date: "05/04/20",
          percentCashback: 5,
          status: 0,
        },
        {
          code: 6,
          value: 600,
          date: "06/04/20",
          percentCashback: 6,
          status: 1,
        },
      ],
    });
  });
};

export const getTotalCashback = () => {
  return new Promise((res) => {
    res({
      data: 91,
    });
  });
};

export const setNewBuy = (data) => {
  return new Promise((res) => {
    res({
      data: {
        ...data,
        percentCashback: 3,
        status: 0,
      },
    });
  });
};

export const setUser = ({ password, ...rest }) => {
  return new Promise((res) => {
    res({
      data: {
        ...rest,
        token: "12038708213ddhd1jf01889087hdha",
      },
    });
  });
};

export const login = ({ email }) => {
  return new Promise((res) => {
    res({
      data: {
        email,
        name: "João das Couves",
        cpf: "000.000.000-80",
        token: "12038708213ddhd1jf01889087hdha",
      },
    });
  });
};
