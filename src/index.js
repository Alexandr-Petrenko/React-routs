import React from 'react';
import ReactDOM from 'react-dom';
import './styles/atomic.scss';
import {About} from './components/About';
import {Team} from "./components/Team";
import {Mission} from "./components/Mission";
import {Slogan} from "./components/Slogan";
import {App} from "./components/App";

// const App = () => (
//   <>
//     <About />
//     <Team />
//     <Mission />
//     <Slogan />
//   </>
// );

  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  )