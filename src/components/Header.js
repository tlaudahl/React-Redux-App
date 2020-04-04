import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Header(props) {

    const handleActive = (_, location, what) => {
        return location.pathname.includes(what)
    }

    return (
        <div className='header'>
            <h1>Rick and Morty</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'flex-end', width: '25%' }}>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/characters/page/1' isActive={(match, location) => handleActive(match, location, 'characters')}>Characters</NavLink>
                <NavLink to='/locations/page/1' isActive={(match, location) => handleActive(match, location, 'locations')}>Locations</NavLink>
                <NavLink to='/episodes'>Episodes</NavLink>
            </div>
        </div>
    )
}
