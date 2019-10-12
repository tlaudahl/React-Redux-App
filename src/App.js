import React from 'react';
import './App.css';
// <--------Character Components -------->
import CharacterList from './components/Characters/CharacterList'
import Character from './components/Characters/Character';
// <--------Location Components -------->
import LocationList from './components/LocationsList';
import Location from './components/Location';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <Route exact path='/' component={HomePage} />
      {/* <------ Character Routes --------> */}
      <Route exact path='/characters' component={CharacterList} />
      <Route path='/characters/:id' render={props => <Character {...props} />} />
      {/* <------ Location Routes --------> */}
      <Route exact path='/locations' component={LocationList} />
      <Route path='/locations/:id' render={props => <Location {...props} />} />
    </div>
  );
}

export default App;
