import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecision-app/indecision-app';
import 'normalize.css/normalize.css';
import GlobalStyle from './app.styles';

ReactDOM.render((
  <>
    <GlobalStyle />
    <IndecisionApp />
  </>
), document.querySelector('body'));
