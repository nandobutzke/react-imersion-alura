import { useState } from 'react';

function useForm(initalValues) {
  const [values, setValues] = useState(initalValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, 
    });
  }

  function handler(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(initalValues);
  }

  return {
    values,
    handler,
    clearForm,
  };
}

export default useForm;
