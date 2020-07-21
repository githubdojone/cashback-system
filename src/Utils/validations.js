const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;

export const validate = (fields, name, value) => {
  let fieldValidation = fields[name](value);
  if (fieldValidation) {
    return { [name]: fieldValidation };
  }

  return { [name]: null };
};

export const emailValidation = (value) => {
  if (!value) {
    return 'Informe o e-mail';
  }
  if (!emailRegex.test(value)) {
    return 'E-mail inválido';
  }
  return false;
};

export const passwordValidation = (value) => {
  if (!value) {
    return 'Informe a senha';
  }
  if (value.length < 6) {
    return 'Senha deve conter 6 ou mais dígitos';
  }
  return false;
};
