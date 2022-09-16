import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, 
    });
  }

  function handler(info) {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handler,
    clearForm,
  };
}

export default useForm;
