import axios from 'axios';

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";


export const fetchCharacters = () => dispatch => {
    dispatch({ type: 'START_FETCHING '});
    axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => dispatch({ type: 'FETCH_SUCCESS', payload: res.data.results }))
        .catch(err => dispatch({ type: 'FETCH_FAILURE', payload: err.response }))
}

// dispatch({ type: 'FETCH_SUCCESS', payload: res.data.results })