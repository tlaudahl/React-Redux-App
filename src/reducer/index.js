import { 
    START_FETCHING,
    FETCH_SUCCESS_CHARACTERS,
    FETCH_SUCCESS_LOCATIONS,
    FETCH_SUCCESS_EPISODES,
    FETCH_FAILURE,
    FETCH_SUCCESS_NEXT
} from '../actions'

const initialState = {
    characters: [],
    locations: [],
    episodes: [],
    isFetching: false,
    error: '',
    nextPage: '',
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
                characters: [...action.payload.results],
                isFetching: false,
                error: '',
                nextPage: action.payload.info.next,
            }
        case FETCH_SUCCESS_LOCATIONS:
            return {
                ...state,
                locations: action.payload,
                isFetching: false,
                error: '',
            }
        case FETCH_SUCCESS_NEXT:
            return {
                ...state,
                characters: action.payload,
                isFetching: false,
                error: '',
                page: state.page + 1
            }
        case FETCH_SUCCESS_EPISODES:
            return {
                ...state,
                episodes: action.payload
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