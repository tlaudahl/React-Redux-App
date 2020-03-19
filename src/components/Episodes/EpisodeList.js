import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { fetchEpisodes } from '../../actions/index';
import EpisodeCard from './EpisodeCard';


function EpisodeList(props) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        props.fetchEpisodes();
        setTimeout(() => {
            setLoaded(true)
        }, 1250)
    }, [])

    if(loaded) {
        return (
            <div className='list'>
                {console.log(props.episodes)}
                {props.episodes.map(episode => {
                    return <EpisodeCard key={episode.id} episode={episode} />
                })}
            </div>
        )
    } else if(!loaded) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '88vh', backgroundColor: '#202329' }}>
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
        episodes: state.episodes
    }
}

export default connect(mapStateToProps, { fetchEpisodes })(EpisodeList)
