import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import HomePage from './components/HomePage';
import Character from './components/Character';
import Header from './components/Header';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/characters' component={CharacterList} />
      <Route path='/characters/:id' render={props => <Character {...props} />} />
    </div>
  );
}

export default App;
