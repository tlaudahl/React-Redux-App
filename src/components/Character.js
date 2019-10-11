import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

const Character = props => {
    const [episodes, setEpisodes] = useState([]);
    const [getDone, setGetDone] = useState(false);

    const character = props.characters.find(char => char.id === Number(props.match.params.id));

    var episodesArray = []

    if (character.episode.length === 1) {
        episodesArray.push(character.episode.toString().split('/')[5])
    } else {
        episodesArray = character.episode.map(episode => {
            return episode.split('/')[5]
        })
    }


    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/episode/${episodesArray.join(',')}`)
            .then(res => {
                setEpisodes(res.data);
                setGetDone(true);
            })
            .catch(err => console.error(err));
    }, [])

    console.log(episodes.hasOwnProperty('name'));

    return (
        <div className='characterPage'>
            <div className='characterCards'>
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
                <h1>Appears In</h1>
            <div className='episodesContainer'>
                {/* if the selected character only appears in one episode, it is not an array, its an object so we check if it has a property of 'name' and if it does it's a single episode so we render accordingly */}
                {episodes.hasOwnProperty('name') &&
                    <div className='episode'>
                        <div className='episodeInfo'>
                            <div className='episodeName'>
                                <span>EPISODE</span>
                                <p>{episodes.name}</p>
                            </div>
                            <div className='episodeSeason'>
                                <span>SEASON</span>
                                <p>{episodes.episode}</p>
                            </div>
                            <div className='airDate'>
                                <span>AIRDATE</span>
                                <p>{episodes.air_date}</p>
                            </div>
                        </div>
                    </div>
                }
                {episodes.length > 0 && 
                    episodes.map(item => {
                    return (
                        <div className='episode'>
                            <div className='episodeInfo'>
                                <div className='episodeName'>
                                    <span>EPISODE</span>
                                    <p>{item.name}</p>
                                </div>
                                <div className='episodeSeason'>
                                    <span>SEASON</span>
                                    <p>{item.episode}</p>
                                </div>
                                <div className='airDate'>
                                    <span>AIRDATE</span>
                                    <p>{item.air_date}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> 
    )
}


const mapStateToProps = state => {
    return {
        characters: state.characters,
        isFetching: state.isFetching,
    }
}

export default connect(mapStateToProps, {})(Character);