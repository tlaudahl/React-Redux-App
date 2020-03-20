import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/core";
import { fetchCharacters } from '../../actions'
import CharacterCard from './CharacterCard';

const override = css`
    border-color: red;
    justify-self: center;
    align-self: center;
    width: 100%;
`;

const CharacterList = props => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if(props.nextPage === '') {
            props.fetchCharacters('https://rickandmortyapi.com/api/character/')
            setTimeout(() => { setLoaded(true)}, 1500)
        } else {
            props.fetchCharacters('https://rickandmortyapi.com/api/character/')
            setLoaded(true)
            // props.fetchCharacters(props.nextPage);
        }
    }, [])

    if(loaded) {
        return (
        <div className='list'>
            {props.characters.map(character => {
                return <CharacterCard key={character.id} character={character} />
            })}
        </div>
        )
    } else {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh', backgroundColor: '#202329' }}>
                <ScaleLoader
                css={override}
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
        characters: state.characters,
        isFetching: state.isFetching,
        nextPage: state.nextPage
    }
}

export default connect(mapStateToProps, { fetchCharacters })(CharacterList);