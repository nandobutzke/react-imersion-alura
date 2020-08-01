/* eslint-disable padded-blocks */
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
import useForm from '../../hooks/useForm'


function AdicionarCategoria() {
  const valoresIniciais = {
    nome: ' ',
    descricao: ' ',
    cor: '',
  };

  const { handler, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategoria] = useState([]);


  useEffect(() => {
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

        clearForm(valoresIniciais);
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



      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}


      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
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
