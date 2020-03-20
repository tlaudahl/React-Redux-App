import React from 'react'
import { Link } from 'react-router-dom'

export default function CharacterCard(props) {
    return (
        <div className='locationsContainerOuter'>
            <div className='locationCards'>
                <Link to={`/locations/${props.location.id}`}>
                    <div className='locationInfo'>
                        <div className='name'>
                            <span>NAME</span>
                            <p>{props.location.name}</p>
                        </div>
                        <div className='dimension'>
                            <span>DIMENSION</span>
                            <p>{props.location.dimension}</p>
                        </div>
                        <div className='type'>
                            <span>TYPE</span>
                            <p>{props.location.type}</p>
                        </div>
                        <div className='residents'>
                            <span>RESIDENTS</span>
                            <p>{props.location.residents.length}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
