import moment from 'moment';

const regexValue = /^\s*(?:[1-9]\d{0,2}(?:\.\d{3})*|0)(?:,\d{1,2})?$/;

const codeValidation = (value) => {
  if (!value) {
    return 'Informe o código';
  }

  return false;
};

const valueValidation = (value) => {
  if (!value) {
    return 'Informe o valor';
  }
  if (!regexValue.test(value)) {
    return 'Valor inválido';
  }

  return false;
};

const dateValidation = (value) => {
  if (!value) {
    return 'Informe a data';
  }
  debugger
  if (!moment(value, 'DD/MM/YY', true).isValid()) {
    return 'Data inválida';
  }
  return false;
};

export const fields = {
  code: codeValidation,
  value: valueValidation,
  date: dateValidation,
};
