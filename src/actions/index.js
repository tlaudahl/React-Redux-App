import axios from 'axios';

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS_CHARACTERS = "FETCH_SUCCESS_CHARACTERS";
export const FETCH_SUCCESS_LOCATIONS = "FETCH_SUCCESS_LOCATIONS";
export const FETCH_SUCCESS_EPISODES = "FETCH_SUCCESS_EPISODES";
export const FETCH_SUCCESS_NEXT = 'FETCH_SUCCESS_NEXT';
export const FETCH_FAILURE = "FETCH_FAILURE";


export const fetchCharacters = (url) => dispatch => {
    dispatch({ type: 'START_FETCHING '});
    axios
        .get(url)
        .then(res => dispatch({ type: FETCH_SUCCESS_CHARACTERS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

export const fetchNextPage = (pageNumber) => dispatch => {
    dispatch({ type: 'START_FETCHING' })
    axios
        .get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
        .then(res => dispatch({ type: FETCH_SUCCESS_NEXT, payload: res.data.results }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
}

export const fetchLocations = (url) => dispatch => {
    axios
        .get(url)
        .then(res => dispatch({ type: FETCH_SUCCESS_LOCATIONS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
}

export const fetchEpisodes = () => dispatch => {
    axios.all([
        axios.get('https://rickandmortyapi.com/api/episode/'), 
        axios.get('https://rickandmortyapi.com/api/episode?page=2')
    ])
    .then(axios.spread((page1, page2) => {
        dispatch({ type: FETCH_SUCCESS_EPISODES, payload: [...page1.data.results, ...page2.data.results]})
    }))
    .catch(err => console.log(err))
}

// dispatch({ type: 'FETCH_SUCCESS', payload: res.data.results })
// dispatch({ type: FETCH_SUCCESS_LOCATIONS, payload: res.data.results })