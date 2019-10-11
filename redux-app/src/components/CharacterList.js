import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions'
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    useEffect(() => {
        props.fetchCharacters();
    }, [])

    if (props.isFetching) {
        return <h2>Loading...</h2>
    }

    return (
        <div className='characterList'>
            {props.error && <p>{props.error}</p>}
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
    }
}

export default connect(mapStateToProps, { fetchCharacters })(CharacterList);