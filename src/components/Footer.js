import React from 'react'

const Footer = props => {
    return (
        <footer style={{ height: '15vh', boxShadow: `0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)` }}>
            <p>Made by: <a href='https://github.com/tlaudahl'>Travis Laudahl</a></p>
            <p>Inspired By: <a href='https://rickandmortyapi.com/'>Rick and Morty API</a></p>
        </footer>
    )
}

export default Footer
