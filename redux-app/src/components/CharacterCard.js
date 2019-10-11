import React from 'react'
import { Link } from 'react-router-dom'

export default function CharacterCard(props) {
    return (
        <div className='cardsContainerOuter'>
            <div className='characterCards'>
                <div className='cardHeader'>
                    <div className='cardImage'>
                        <Link to={`/characters/${props.character.id}`}>
                            <img src={props.character.image} alt={props.character.name} />
                        </Link>
                    </div>
                    <div className='characterName'>
                        <h2>{props.character.name}</h2>
                        <p>{`id: ${props.character.id}`}</p>
                    </div>
                </div>
                <div className='characterInfo'>
                    <div className='status'>
                        <span>STATUS</span>
                        <p>{props.character.status}</p>
                    </div>
                    <div className='species'>
                        <span>SPECIES</span>
                        <p>{props.character.species}</p>
                    </div>
                    <div className='gender'>
                        <span>GENDER</span>
                        <p>{props.character.gender}</p>
                    </div>
                    <div className='origin'>
                        <span>ORIGIN</span>
                        <p>{props.character.origin.name}</p>
                    </div>
                    <div className='lastLocation'>
                        <span>LAST LOCATION</span>
                        <p>{props.character.location.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
