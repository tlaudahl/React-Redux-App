import React from 'react'
import { Link } from 'react-router-dom'

export default function EpisodeCard(props) {
    return (
        <div className='locationsContainerOuter'>
            <Link to={`/episodes/${props.episode.id}`}>
                <div className='locationCards'>
                    <div className='locationInfo'>
                        <div className='name'>
                            <span>NAME</span>
                            <p>{props.episode.name}</p>
                        </div>
                        <div className='air_date'>
                            <span>AIR DATE</span>
                            <p>{props.episode.air_date}</p>
                        </div>
                        <div className='type'>
                            <span>EPISODE</span>
                            <p>{props.episode.episode}</p>
                        </div>
                        <div className='residents'>
                            <span>CHARACTERS</span>
                            <p>{props.episode.characters.length}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
