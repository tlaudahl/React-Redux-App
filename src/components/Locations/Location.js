import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from 'axios';

const Location = props => {
    const [characters, setCharacters] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const location = props.locations.find(location => location.id === Number(props.match.params.id));

    let charactersArray = []

    if (location.residents.length === 1) {
        charactersArray.push(location.residents.toString().split('/')[5])
    } else {
        charactersArray = location.residents.map(resident => {
            return resident.split('/')[5]
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
    }, [location])

    if(loaded) {
        return (
            <div className='characterPage'>
            <div className='locationCards'>
                <div className='locationInfo'>
                    <div className='name'>
                        <span>NAME</span>
                        <p>{location.name}</p>
                    </div>
                    <div className='dimension'>
                        <span>DIMENSION</span>
                        <p>{location.dimension}</p>
                    </div>
                    <div className='type'>
                        <span>TYPE</span>
                        <p>{location.type}</p>
                    </div>
                    <div className='residents'>
                        <span>RESIDENTS</span>
                        <p>{location.residents.length}</p>
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
                                    <img src={characters.image} alt={characters.name} />
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
                                <img src={character.image} alt={character.name} />
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
        locations: state.locations,
        isFetching: state.isFetching,
    }
}

export default connect(mapStateToProps, {})(Location);