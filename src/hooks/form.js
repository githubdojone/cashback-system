import { useState } from "react";
import { validate } from "../Utils/validations";

export const useForm = (callback, fields) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback(inputs);
  };

  const handleInputChange = (event) => {
    event.persist();

    const {
      target: { name, value },
    } = event;

    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const handleInputBlur = (event) => {
    event.persist();
    const {
      target: { name, value },
    } = event;

    setErrors({
      ...errors,
      ...validate(fields, name, value),
    });
  };

  return {
    handleSubmit,
    handleInputChange,
    handleInputBlur,
    errors,
    inputs,
  };
};
