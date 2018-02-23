import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Contacts from '../contacts';
import Settings from '../settings';
import FAQ from '../FAQ';

const App = () => (
  <div className = "container">
    <nav className = "navBar">
      <ul className = "navBar__list">
        <li className = "navBar__item">
          <Link className = "navBar__link" to="/">Home</Link>
        </li>
        <li className = "navBar__item">
          <Link className = "navBar__link" to="/about-us">About</Link>
        </li>
        <li className = "navBar__item">
          <Link className = "navBar__link" to="/contacts">Contacts</Link>
        </li>
        <li className = "navBar__item">
          <Link className = "navBar__link" to="/settings">Settings</Link>
        </li>
        <li className = "navBar__item">
          <Link className = "navBar__link" to="/FAQ">FAQ</Link>
        </li>
      </ul>
    </nav>

    <main className = "content">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/FAQ" component={FAQ} />
    </main>
  </div>
)

export default App
