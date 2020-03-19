import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchEpisodes } from '../../actions/index';
import EpisodeCard from './EpisodeCard';

function EpisodeList(props) {

    useEffect(() => {
        props.fetchEpisodes();
    }, [])

    console.log('episode list', props.episodes);
    return (
        <div className='list'>
            {props.episodes.map(episode => {
                return <EpisodeCard key={episode.id} episode={episode} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        episodes: state.episodes
    }
}

export default connect(mapStateToProps, { fetchEpisodes })(EpisodeList)
