import {
  Route,
  NavLink,
  BrowserRouter,
} from 'react-router-dom';
import { About} from './pages/About';
import { Team } from './pages/Team';
import { Mission } from './pages/Mission';
import { Slogan } from './pages/Slogan';
import { Target } from './pages/Target';
import { Competitive } from './pages/Competitive';
import { Market } from './pages/Market';
import { Difference } from './pages/Difference';

const ROUTE_CONFIG = [
  {id: 0, path: '/about', content: About, linkValue: 'About',},
  {id: 1, path: '/team', content: Team, linkValue: 'Our Team',},
  {id: 2, path: '/mission', content: Mission, linkValue: 'Mission',},
  {id: 3, path: '/slogan', content: Slogan, linkValue: 'Slogan',},
  {id: 4, path: '/target', content: Target, linkValue: 'Target',},
  {id: 5, path: '/competitive', content: Competitive, linkValue: 'Competitive',},
  {id: 6, path: '/market', content: Market, linkValue: 'Market Strategy',},
  {id: 7, path: '/difference', content: Difference, linkValue: 'Difference',},
];

export const App = () => (
  <BrowserRouter>
    <nav className="nav">
      <ul className="nav__list">
        {ROUTE_CONFIG.map(config => {
          const { id, path, linkValue} = config;

          return (
            <NavLink
              to={path}
              className="nav__item"
              key={id}
            >
              {linkValue}
            </NavLink>
          );
        })}
      </ul>
    </nav>
    <div className="content">
      {ROUTE_CONFIG.map(config => {
        const { id, path, content} = config;

        return (
          <Route
            path={path}
            component={content}
            key={id}
          />
        );
      })}
    </div>
  </BrowserRouter>
);
