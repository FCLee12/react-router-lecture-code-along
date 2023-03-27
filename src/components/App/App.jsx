import React from 'react';
// "I want to use HashRouter but I want to call it Router"
  // Syntax is specific to import syntax
  // an alias
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Search from '../Search/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/plants'>Plants</Link>
            </li>
            <li>
              <Link to='/animals'>Animals</Link>
            </li>
            <li>
              <Link to='/animals/details/37'>Details for animal with id number 37</Link>
            </li>
            <li>
              <Link to='/search?legs=1000&type=insect'>Search for insect with 1000 legs</Link>
            </li>
          </ul>
        </nav>

        <hr />


        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/plants'>
          <Plants />
        </Route>
        <Route path='/animals' exact>
          <Animals />
        </Route>
        <Route path='/animals/details/:id'>
          <AnimalDetails />        
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </div>
    </Router>
  );
}

export default App;
