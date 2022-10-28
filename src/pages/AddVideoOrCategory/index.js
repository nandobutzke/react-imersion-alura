import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import videosRepository from '../../Repositories/VideosRepository';
import CategoriesRepository from '../../Repositories/CategoriesRepository';

function AdicionarVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const { handler, values } = useForm({
    title: '',
    url: '',
    categoria: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const chosenCategory = categories.find((category) => {
      return category.title === values.category;
    });

    videosRepository.create({
      title: values.title,
      url: values.url,
      categoryId: chosenCategory.id,
    })
    .then(() => {
      history.push('/');
    });
  }

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesData = await CategoriesRepository.getAll();
  
        setCategories(categoriesData.map((category) => category.title));
      } catch {}
    }

    loadCategories();
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeos</h1>

      <form onSubmit={handleSubmit}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.title}
          onChange={handler}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handler}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handler}
          suggestions={categories}
        />

        <Button type="submit">
          Adicionar
        </Button>  


      </form>

      <Link to="/adicionar/categoria">
        Adicionar Categoria
      </Link>
    </PageDefault>

  );
}

export default AdicionarVideo;
