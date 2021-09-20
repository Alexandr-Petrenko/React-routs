import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/default.css';
import './styles/atomic.scss';

import {App} from "./components/App";

  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  )