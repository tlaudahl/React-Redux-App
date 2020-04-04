import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../assets/bootstrap.min.css'

import Pagination from 'react-bootstrap/Pagination'


const PaginationComponent = (props) => {
    let pathname = props.history.location.pathname

    const handleLink = (str, number) => {
        if (str.includes('characters')) {
            props.history.push(`${str}/${number}`)
        } else if (str.includes('locations')) {
            props.history.push(`${str}/${number}`)
        }
    }
    const [active, setActive] = useState(Number(props.history.location.pathname.split('/')[3]))
    const items = []

    for(let number = 1; number <= props.pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => {
                handleLink(pathname.substr(0, pathname.lastIndexOf('/')), number)
                setActive(Number(props.history.location.pathname.split('/')[3]))
            }}>
                {number}
            </Pagination.Item>
        )
    }

    return (
        <div>
            <Pagination>
                <Pagination.First onClick={() => {
                    handleLink(pathname.substr(0, pathname.lastIndexOf('/')), 1)
                    // props.history.push('/characters/page/1')
                }}/>
                <Pagination.Prev onClick={() => {
                    handleLink(pathname.substr(0, pathname.lastIndexOf('/')), active-1)
                    // props.history.push(`/characters/page/${active-1}`)
                }}/>
                    {items}
                <Pagination.Next onClick={() => {
                    handleLink(pathname.substr(0, pathname.lastIndexOf('/')), active+1)
                    // props.history.push(`/characters/page/${active+1}`)
                }}/>
                <Pagination.Last onClick={() => {
                    handleLink(pathname.substr(0, pathname.lastIndexOf('/')), props.pages)
                    // props.history.push(`/characters/page/${props.pages}`)
                }}/>
            </Pagination>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        charPerPage: state.characters.length,
        pages: state.pages,
        charCount: state.charCount,
    }
}

export default connect(mapStateToProps, {})(PaginationComponent)