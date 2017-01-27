import React from 'react';
import { render } from 'react-dom';
import App from './app';
import AppState from '../store';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
const store = new AppState();
render(
    <App store={store}/>,
  document.getElementById('app')
)
