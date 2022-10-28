import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm'

export default function AddCategory() {
  const initialData = {
    name: ' ',
    description: ' ',
    color: '',
  };

  const { handler, values, clearForm } = useForm(initialData);

  const [categories, setCategories] = useState([]);

  function handleSubmit(info) {
    info.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);

    clearForm(initialData);
  }

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categories';
    fetch(URL_TOP)
      .then(async (response) => {
        const data = await response.json();
        setCategories([
          ...data
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handler}
        />

        <FormField
          label="Descricao"
          type="text"
          name="description"
          value={values.name}
          onChange={handler}
        />


        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.name}
          onChange={handler}
        />

        <Button>
          Adicionar
        </Button>

      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.title}`}>
            {category.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}
