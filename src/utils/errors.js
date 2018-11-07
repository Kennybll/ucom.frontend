import { camelCase } from 'lodash';

export const getError = (errors, fieldName) => {
  if (!errors) {
    return null;
  }

  const fieldError = errors.find(error => error.field === fieldName);

  if (!fieldError) {
    return null;
  }

  return fieldError.message;
};

export const parseErrors = (error) => {
  if (error.response && error.response.data && error.response.data.errors) {
    return Array.isArray(error.response.data.errors) ?
      error.response.data.errors.map(item => ({ ...item, field: camelCase(item.field) })) :
      error.response.data.errors;
  }

  const errors = {
    general: error.message,
  };

  return errors;
};

export const parseWalletErros = (error) => {
  try {
    const { message } = error;
    const data = JSON.parse(message);

    return data.errors;
  } catch (e) {
    console.error(e);
  }

  return null;
};
