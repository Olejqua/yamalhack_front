import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'mobx-react';
import connect from '@vkontakte/vk-connect';
import App from './App';

connect.send('VKWebAppInit');

ReactDOM.render((
  <Provider {...store}>
    <App />
  </Provider>
), document.getElementById('root'));
