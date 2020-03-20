import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <div className='header'>
            <h1>Rick and Morty</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'flex-end', width: '25%' }}>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/characters'>Characters</NavLink>
                <NavLink to='/locations'>Locations</NavLink>
                <NavLink to='/episodes'>Episodes</NavLink>
            </div>
        </div>
    )
}
