import React, { useState, useEffect } from 'react';
import { Container } from 'react-grid-system';

import { getBuys, getTotalCashback } from '../services/api';
import BuyList from '../components/BuyList';
import HeaderList from '../components/HeaderList';
import Loading from '../components/_shared/Loading';

import {
  useAppContext,
  setBuyList,
  setTotalCashback,
} from '../contexts/AppContext';

function Buys() {
  const [loading, setLoading] = useState(true);

  const { state, dispatch } = useAppContext();

  const getList = async () => {
    try {
      const { data } = await getBuys();
      dispatch(setBuyList(data));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const getCashback= async () => {
    try {
      const { data } = await getTotalCashback();
      dispatch(setTotalCashback(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
    getCashback();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      {loading && <Loading />}
      <HeaderList />
      <BuyList list={state.buyList} />
    </Container>
  );
}

export default Buys;
