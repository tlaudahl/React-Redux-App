import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// <--------Character Components -------->
import CharacterList from './components/Characters/CharacterList'
import Character from './components/Characters/Character';
// <--------Location Components -------->
import LocationList from './components/Locations/LocationsList';
import Location from './components/Locations/Location';
// <--------Homepage/Header Components -------->
import HomePage from './components/HomePage';
import Header from './components/Header';
// <--------Footer Components -------->
// import Footer from './components/Footer';
// <--------Episode Components -------->
import EpisodeList from './components/Episodes/EpisodeList';


function App() {
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <Route exact path='/' component={HomePage} />
      {/* <------ Character Routes --------> */}
      <Route exact path='/characters' component={CharacterList} />
      <Route exact path='/characters/:id' render={props => <Character {...props} />} />
      {/* <------ Location Routes --------> */}
      <Route exact path='/locations' component={LocationList} />
      <Route path='/locations/:id' render={props => <Location {...props} />} />
      {/* <Route path='/characters' render={props => <Footer {...props} />} /> */}
      {/* <------ Episode Routes --------> */}
      <Route exact path='/episodes' component={EpisodeList} />
    </div>
  );
}

export default App;
