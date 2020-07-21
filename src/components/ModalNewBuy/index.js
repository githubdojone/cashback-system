import React, { useState } from 'react';

import { ModalNBWrapper } from './styles';
import Button from '../_shared/Button';
import Modal from '../_shared/Modal';
import NewBuy from '../NewBuy';

export default function ModalNewBuy() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal((modal) => !modal);

  return (
    <ModalNBWrapper>
      <Button onClick={toggle}>Adicionar compra</Button>
      <Modal isOpen={modal} toggle={toggle} title="Adicionar compra">
        <NewBuy toggle={toggle} />
      </Modal>
    </ModalNBWrapper>
  );
}
