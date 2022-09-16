import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdicionarVideo from './pages/adicionar';
import AdicionarCategoria from './pages/categoria';

const erro404 = () => "Página 404";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/adicionar/video" component={AdicionarVideo} />
      <Route path="/adicionar/categoria" component={AdicionarCategoria} />
      <Route component={erro404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
