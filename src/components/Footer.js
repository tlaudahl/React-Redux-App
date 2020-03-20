import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNextPage } from '../actions';

const Footer = props => {
    console.log('Footer Props', props.match.url);
    console.log('Footer Page?', props.page);
    return (
        <footer>
            <button>Prev</button>
            <Link to={`/characters/page${props.page}`}><button onClick={() => fetchNextPage(props.page+1)}>Next</button></Link>
        </footer>
    )
}


const mapStateToProps = state => {
    return {
        characters: state.characters,
        page: state.page,
    }
}

export default connect(mapStateToProps, { fetchNextPage })(Footer);
