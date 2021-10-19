import ReactDOM from 'react-dom';
// import './styles/_reset.scss';
// import './styles/_default.scss';
// import './styles/_atomic.scss';
import App from './components/App.jsx';
import { ApiProvider } from './providers/ApiProvider.jsx';

ReactDOM.render(
  <ApiProvider>
    <App />
  </ApiProvider>,
  document.getElementById('root'),
);
