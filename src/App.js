import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer'
// <--------Character Components -------->
import CharacterList from './components/Characters/CharacterList';
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
import Episode from './components/Episodes/Episodes';


function App() {
  return (
    <div className="App">
      <Route path='/' render={props => <Header {...props} />} />
      <Route exact path='/' component={HomePage} />
      {/* <------ Character Routes --------> */}
      <Route exact path='/characters/page/:num' render={props => <CharacterList {...props} />} />
      <Route exact path='/characters/:id' render={props => <Character {...props} />} />
      {/* <Route path='/characters' render={props => <Pagination charPerPage={props.characters.length} totalChars={props.charCount}/>} /> */}
      {/* <------ Location Routes --------> */}
      <Route exact path='/locations/page/:num' render={props => <LocationList {...props} />} />
      <Route exact path='/locations/:id' render={props => <Location {...props} />} />
      {/* <------ Episode Routes --------> */}
      <Route exact path='/episodes' component={EpisodeList} />
      <Route exact path='/episodes/:id' render={props => <Episode {...props} />} />
      {/* <Route path='/' component={Footer} /> */}
    </div>
  );
}

export default App;
