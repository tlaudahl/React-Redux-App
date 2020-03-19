import React from 'react'

export default function EpisodeCard(props) {
    return (
        <div className='locationsContainerOuter'>
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
        </div>
    )
}
