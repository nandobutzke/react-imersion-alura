/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import videosRepository from '../../repositories/videos';
import categoriasRepository from '../../repositories/categorias';

function AdicionarVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const { handler, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
    setCategorias();
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        console.log('categoriaEscolhida', categoriaEscolhida);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
        .then(() => {
          console.log('Adicionado!');
          history.push('/');
        });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
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
          suggestions={
            [
              'Back End',
              'Front End',
            ]
          }
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
