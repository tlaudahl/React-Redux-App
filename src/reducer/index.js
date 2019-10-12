import { 
    START_FETCHING,
    FETCH_SUCCESS_CHARACTERS,
    FETCH_SUCCESS_LOCATIONS,
    FETCH_FAILURE
} from '../actions'

const initialState = {
    characters: [],
    locations: [],
    episodes: [],
    isFetching: false,
    error: '',
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case FETCH_SUCCESS_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                isFetching: false,
                error: '',
            }
        case FETCH_SUCCESS_LOCATIONS:
            return {
                ...state,
                locations: action.payload,
                isFetching: false,
                error: '',
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;