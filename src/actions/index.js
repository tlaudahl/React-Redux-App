import axios from 'axios';

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS_CHARACTERS = "FETCH_SUCCESS_CHARACTERS";
export const FETCH_SUCCESS_LOCATIONS = "FETCH_SUCCESS_LOCATIONS";
export const FETCH_FAILURE = "FETCH_FAILURE";


export const fetchCharacters = () => dispatch => {
    dispatch({ type: 'START_FETCHING '});
    axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => dispatch({ type: FETCH_SUCCESS_CHARACTERS, payload: res.data.results }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

export const fetchLocations = () => dispatch => {
    axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(res => dispatch({ type: FETCH_SUCCESS_LOCATIONS, payload: res.data.results }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
}

// dispatch({ type: 'FETCH_SUCCESS', payload: res.data.results })
// dispatch({ type: FETCH_SUCCESS_LOCATIONS, payload: res.data.results })