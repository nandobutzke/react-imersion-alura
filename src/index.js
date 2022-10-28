import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddVideo from './pages/AddVideoOrCategory';
import AddCategory from './pages/Categories';

const erro404 = () => "Página 404";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/adicionar/video" component={AddVideo} />
      <Route path="/adicionar/categoria" component={AddCategory} />
      <Route component={erro404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
