import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { fetchLocations } from '../../actions';
import LocationsCard from './LocationsCard';
import PaginationComponent from '../PaginationComponent';

const CharacterList = props => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(false)
        props.fetchLocations(`https://rickandmortyapi.com/api/location/?page=${props.location.pathname.split('/')[3]}`);
        setTimeout(() => {
            setLoaded(true)
        }, 1250)
    }, [props.location.pathname])

    if(loaded) {
        return (
        <>
            <div className='list'>
                {props.locations.map(location => {
                    return <LocationsCard key={location.id} location={location} />
                })}
            </div>
            <PaginationComponent history={props.history} />
        </>
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
    }
}

export default connect(mapStateToProps, { fetchLocations })(CharacterList);