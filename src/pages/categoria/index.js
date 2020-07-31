/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

function AdicionarCategoria() {
  const valoresIniciais = {
    nome: ' ',
    descricao: ' ',
    cor: '',
  };

  const [categorias, setCategoria] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, cor, etc.
    setValues({
      ...values,
      [chave]: valor, // nome: valor
    });
  }

  function handler(info) {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  useEffect(() => {
    console.log('efeito');
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategoria([
          ...resposta
        ]);
      });
  }, []);




  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function hendleSubmit(info) {
        info.preventDefault();
        setCategoria([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handler}
        />

        <FormField
          label="Descricao"
          type=""
          name="descricao"
          value={values.nome}
          onChange={handler}
        />


        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.nome}
          onChange={handler}
        />

        <Button>
          Adicionar
        </Button>

        <div>
          Loading...
        </div>

      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}

export default AdicionarCategoria;
