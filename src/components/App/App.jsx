import React from 'react';
import {
  Route,
  NavLink,
  HashRouter,
} from 'react-router-dom';
import { About } from '../About';
import { Team } from '../Team';
import { Mission } from '../Mission';
import { Slogan } from '../Slogan';
import { Target } from '../Target';
import { Competitive } from '../Competitive';
import { Market } from '../Market'
import { Difference } from '../Difference';

export const App = () => (
  <HashRouter>
    <nav className='nav'>
      <ul className='nav__list'>
        <NavLink to='/about' className='nav__item'>
          About
        </NavLink>
        <NavLink to='/team' className='nav__item'>
          Our Team
        </NavLink>
        <NavLink to='/mission' className='nav__item'>
          Mission
        </NavLink>
        <NavLink to='/slogan' className='nav__item'>
          Slogan
        </NavLink>
        <NavLink to='/target' className='nav__item'>
          Target
        </NavLink>
        <NavLink to='/competitive' className='nav__item'>
          Competitive
        </NavLink>
        <NavLink to='/market' className='nav__item'>
          Market Strategy
        </NavLink>
        <NavLink to='/difference' className='nav__item'>
          Difference
        </NavLink>
      </ul>
    </nav>
    <div className="content">
      <Route path='/about' component={ About } />
      <Route path='/team' component={ Team } />
      <Route path='/mission' component={ Mission } />
      <Route path='/slogan' component={ Slogan } />
      <Route path='/target' component={ Target } />
      <Route path='/competitive' component={ Competitive } />
      <Route path='/market' component={ Market } />
      <Route path='/difference' component={ Difference } />
    </div>
  </HashRouter>
);
