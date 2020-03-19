import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { fetchCharacters } from '../../actions'
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    useEffect(() => {
        console.log('char list props', props)
        if(props.nextPage === '') {
            props.fetchCharacters('https://rickandmortyapi.com/api/character/')
        } else {
            console.log(props.nextPage.split('='))
            props.fetchCharacters('https://rickandmortyapi.com/api/character/')
            // props.fetchCharacters(props.nextPage);
        }

    }, [])

    if (props.isFetching) {
        return <h2>Loading...</h2>
    }

    const getNextPage = () => {
        props.fetchCharacters(props.nextPage);
        console.log(props.characters)
    }

    return (
        <div className='list'>
            {props.characters.map(character => {
                return <CharacterCard key={character.id} character={character} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
        isFetching: state.isFetching,
        error: state.error,
        nextPage: state.nextPage
    }
}

export default connect(mapStateToProps, { fetchCharacters })(CharacterList);