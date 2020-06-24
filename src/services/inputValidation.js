/* eslint-disable no-param-reassign */
function inputValidation(input, data) {
  if (input.name === 'name' || input.name === 'climate'
  || input.name === 'terrain' || input.name === 'starship_class') {
    if (input.value.length < 33 && input.value.length > 0) {
      input.classList.add('input-valid');
      return true;
    }
    input.classList.add('input-invalid');
    input.placeholder = `${input.name} must be less than 33 characters`;
    return false;
  } if (input.name === 'height' || input.name === 'mass'
    || input.name === 'length' || input.name === 'diameter' || input.name === 'crew') {
    if (Number(input.value) > 0) {
      input.classList.add('input-valid');
      return true;
    }
    input.classList.add('input-invalid');
    input.placeholder = `${input.name} must be number more than 0`;
    return false;
  } if (input.name === 'population' || input.name === 'passengers') {
    if (Number(input.value) >= 0 && input.value !== '') {
      input.classList.add('input-valid');
      return true;
    }
    input.classList.add('input-invalid');
    input.placeholder = `${input.name} must be number more or equal 0`;
    return false;
  } if (input.name === 'gender') {
    if (input.value === 'male' || input.value === 'female' || input.value === 'n/a') {
      input.classList.add('input-valid');
      return true;
    }
    input.classList.add('input-invalid');
    input.placeholder = `${input.name} must be male, female or n/a`;
    return false;
  } if (input.name === 'birth_year') {
    if ((Number(input.value) >= 0 && input.value !== '') || input.value === 'unknown') {
      input.classList.add('input-valid');
      return true;
    }
    input.classList.add('input-invalid');
    input.placeholder = `${input.name} must be an integer or unknown`;
    return false;
  } if (input.name === 'id') {
    if (data.every((obj) => String(obj.id) !== input.value) && input.value !== '') {
      input.classList.add('input-valid');
      return true;
    }
    input.classList.add('input-invalid');
    input.placeholder = `${input.name} must be unique`;
    return false;
  }
  return true;
}

export default inputValidation;
