import React from 'react';

import { ListWrapper, Message } from './styles';
import BuyItem from '../BuyItem';

export default function BuyList({ list }) {
  if (!list.length) {
    return <Message>Não há compras</Message>;
  }
  return (
    <ListWrapper>
      {list.map((item) => (
        <BuyItem key={item.code} {...item} />
      ))}
    </ListWrapper>
  );
};
