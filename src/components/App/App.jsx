import React from 'react';
import {
  Route,
  NavLink,
  HashRouter,
} from 'react-router-dom';
import {About} from '../About';
import {Team} from '../Team';
import {Mission} from '../Mission';
import {Slogan} from '../Slogan';

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
      </ul>
    </nav>
    <div className="content">
      <Route path='/about' component={ About }/>
      <Route path='/team' component={ Team }/>
      <Route path='/mission' component={ Mission }/>
      <Route path='/slogan' component={ Slogan }/>
    </div>
  </HashRouter>
);