import React, { useEffect, useState } from 'react';

import { BackDrop, ModalWrapper, Title } from './styles';

export default function Modal({
  isOpen,
  toggle,
  children,
  height = '40%',
  title,
}) {
  const [marginBottom, setMarginBottom] = useState('-100%');

  const handleToggle = () => {
    setMarginBottom('-100%');
    setTimeout(() => toggle(), 500);
  };

  const stopPropagation = (e) => e.stopPropagation();

  useEffect(() => {
    if (isOpen) {
      setMarginBottom('0');
    }
    // eslint-disable-next-line
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <BackDrop data-testid="backdrop" onClick={handleToggle}>
          <ModalWrapper
            height={height}
            marginBottom={marginBottom}
            onClick={stopPropagation}
          >
            {title && <Title>{title}</Title>}
            {children}
          </ModalWrapper>
        </BackDrop>
      )}
    </>
  );
}
