import React from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import Input from '../_shared/Input';
import Button from '../_shared/Button';
import { useForm } from '../../hooks/form';
import { FormWrapper } from './styles';
import { fields } from './validation';
import { setNewBuy } from '../../services/api';

import { useAppContext, addToBuyList } from '../../contexts/AppContext';

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false,
}

const currencyMask = createNumberMask(defaultMaskOptions);

const code = 'code',
  value = 'value',
  date = 'date';

export default function NewBuy({toggle}) {
  const { dispatch } = useAppContext()

  const submitForm = (inputs) => {
    setNewBuy(inputs).then(({data}) => {
      dispatch(addToBuyList(data));
      toggle && toggle();
    })
  };

  const {
    handleSubmit,
    handleInputChange,
    handleInputBlur,
    errors,
    inputs,
  } = useForm(submitForm, fields);

  const inputCode = {
    id: code,
    label: 'Código',
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    value: inputs[code] || '',
    error: errors[code],
  };

  const inputValue = {
    id: value,
    label: 'Valor',
    mask: currencyMask,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    value: inputs[value] || '',
    error: errors[value],
  };

  const inputDate = {
    id: date,
    label: 'Data',
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/],
    guide: false,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    value: inputs[date] || '',
    error: errors[date],
  };

  const handleBtnDisabled = () => {
    return !(
      inputs[code] &&
      inputs[value] &&
      inputs[date] &&
      !errors[code] &&
      !errors[value] &&
      !errors[date]
    );
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input {...inputCode} />
      <Input {...inputValue} />
      <Input {...inputDate} />
      <Button type="submit" disabled={handleBtnDisabled()}>
        Adicionar
      </Button>
    </FormWrapper>
  );
};
