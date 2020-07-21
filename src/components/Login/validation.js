import { emailValidation, passwordValidation } from "../../Utils/validations";

export const fields = {
  email: emailValidation,
  password: passwordValidation,
};
