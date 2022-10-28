import React from 'react';
import Menu from './components/Menu';
import PageDefault from './components/PageDefault';
import CategoriesList from './components/CategoriesList';

export default function App() {
  return (
    <PageDefault paddingAll={0}>
      <Menu />

      <CategoriesList />

    </PageDefault>
  );
}
