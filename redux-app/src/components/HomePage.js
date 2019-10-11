import React from 'react'

export default function HomePage() {
    return (
        <div className='homePage'>
            <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='rick' />
            <div className='homePageText'>
                <p>I made this app using the <a href='https://rickandmortyapi.com/'>Rick and Morty</a> API. Most of the styling was based off of their website, but I coded all the functionality myself. It's made with react using React Redux for state management, redux-thunk for the middleware, and React Router to make it a single page application.</p>
            </div>
        </div>
    )
}
