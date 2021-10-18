import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/default.css';
import './styles/_atomic.scss';
import App from './components/App.jsx';
import { ApiProvider } from './providers/ApiProvider.jsx';

ReactDOM.render(
  <ApiProvider>
    <App />
  </ApiProvider>,
  document.getElementById('root'),
);
