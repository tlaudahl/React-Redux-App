import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { fetchLocations } from '../../actions';
import LocationsCard from './LocationsCard';

const CharacterList = props => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        props.fetchLocations();
        setTimeout(() => {
            setLoaded(true)
        }, 1000)
    }, [])


    if(loaded) {
        return (
        <div className='list'>
            {props.locations.map(location => {
                return <LocationsCard key={location.id} location={location} />
            })}
        </div>
        )
    } else {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh', backgroundColor: '#202329' }}>
            <ScaleLoader
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
        locations: state.locations,
        isFetching: state.isFetching,
    }
}

export default connect(mapStateToProps, { fetchLocations })(CharacterList);