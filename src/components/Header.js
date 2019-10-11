import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>
            <NavLink exact to='/'>Home</NavLink>
            <h1>Rick and Morty</h1>
            <NavLink to='/characters'>Characters</NavLink>
        </div>
    )
}
