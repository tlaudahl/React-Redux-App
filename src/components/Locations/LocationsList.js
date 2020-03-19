import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchLocations } from '../../actions';
import LocationsCard from './LocationsCard';

const CharacterList = props => {
    useEffect(() => {
        props.fetchLocations();
    }, [])

    if (props.isFetching) {
        return <h2>Loading...</h2>
    }

    return (
        <div className='list'>
            {props.error && <p>{props.error}</p>}
            {props.locations.map(location => {
                return <LocationsCard key={location.id} location={location} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        locations: state.locations,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, { fetchLocations })(CharacterList);