import { emailValidation, passwordValidation } from "../../Utils/validations";
import { checkCpf } from "../../Utils/checkCpf";

const nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

const nameValidation = (value) => {
  if (!value) {
    return "Informe o nome completo";
  }
  if (!nameRegex.test(value)) {
    return "Nome inválido";
  }
  return false;
};

const cpfValidation = (value) => {
  if (!value) {
    return "Informe o CPF";
  }
  if (!checkCpf(value)) {
    return "CPF inválido";
  }
  return false;
};

export const fields = {
  name: nameValidation,
  cpf: cpfValidation,
  email: emailValidation,
  password: passwordValidation,
};
