import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from 'axios';

const Episode = props => {
    const [characters, setCharacters] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const episode = props.episodes.find(episode => episode.id === Number(props.match.params.id));

    let charactersArray = []

    if (episode.characters.length === 1) {
        charactersArray.push(episode.characters.toString().split('/')[5])
    } else {
        charactersArray = episode.characters.map(character => {
            return character.split('/')[5]
        })
    }


    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${charactersArray.join(',')}`)
            .then(res => {
                setCharacters(res.data);
                setTimeout(() => { setLoaded(true) }, 1250)
            })
            .catch(err => console.error(err));
    }, [episode])

    if (loaded) {
        return (
            <div className='characterPage'>
            <div className='locationCards'>
                <div className='locationInfo'>
                    <div className='name'>
                        <span>NAME</span>
                        <p>{episode.name}</p>
                    </div>
                    <div className='air_date'>
                        <span>AIR DATE</span>
                        <p>{episode.air_date}</p>
                    </div>
                    <div className='type'>
                        <span>EPISODE</span>
                        <p>{episode.episode}</p>
                    </div>
                    <div className='residents'>
                        <span>CHARACTERS</span>
                        <p>{episode.characters.length}</p>
                    </div>
                </div>
            </div>
                <h1>Residents</h1>
            <div className='cardsContainerOuter'>
                {/* if the selected character only appears in one episode, it is not an array, its an object so we check if it has a property of 'name' and if it does it's a single episode so we render accordingly */}
                {characters.hasOwnProperty('name') &&
                            <div className='characterCards'>
                            <div className='cardHeader'>
                                <div className='cardImage'>
                                    <Link to={`/characters/${characters.id}`}>
                                        <img src={characters.image} alt={characters.name} />
                                    </Link>
                                </div>
                                <div className='characterName'>
                                    <h2>{characters.name}</h2>
                                    <p>{`id: ${characters.id}`}</p>
                                </div>
                            </div>
                            <div className='characterInfo'>
                                <div className='status'>
                                    <span>STATUS</span>
                                    <p>{characters.status}</p>
                                </div>
                                <div className='species'>
                                    <span>SPECIES</span>
                                    <p>{characters.species}</p>
                                </div>
                                <div className='gender'>
                                    <span>GENDER</span>
                                    <p>{characters.gender}</p>
                                </div>
                                <div className='origin'>
                                    <span>ORIGIN</span>
                                    <p>{characters.origin.name}</p>
                                </div>
                                <div className='lastLocation'>
                                    <span>LAST LOCATION</span>
                                    <p>{characters.location.name}</p>
                                </div>
                            </div>
                        </div>
                }
                {characters.length > 0 && 
                    characters.map(character => {
                    return (
                        <div key={character.id} className='characterCards'>
                        <div className='cardHeader'>
                            <div className='cardImage'>
                                {/* <Link to={`/characters/${character.id}`}> */}
                                    <img src={character.image} alt={character.name} />
                                {/* </Link> */}
                            </div>
                            <div className='characterName'>
                                <h2>{character.name}</h2>
                                <p>{`id: ${character.id}`}</p>
                            </div>
                        </div>
                        <div className='characterInfo'>
                            <div className='status'>
                                <span>STATUS</span>
                                <p>{character.status}</p>
                            </div>
                            <div className='species'>
                                <span>SPECIES</span>
                                <p>{character.species}</p>
                            </div>
                            <div className='gender'>
                                <span>GENDER</span>
                                <p>{character.gender}</p>
                            </div>
                            <div className='origin'>
                                <span>ORIGIN</span>
                                <p>{character.origin.name}</p>
                            </div>
                            <div className='lastLocation'>
                                <span>LAST LOCATION</span>
                                <p>{character.location.name}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        )
    } else {
        return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '88vh', backgroundColor: '#202329' }}>
            <ScaleLoader
            size={150}
            color={'rgb(255, 152, 0)'}
            loading={!loaded}
            />
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        episodes: state.episodes,
        isFetching: state.isFetching,
    }
}

export default connect(mapStateToProps, {})(Episode);