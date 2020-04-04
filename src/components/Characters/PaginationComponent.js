import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../../actions'
import '../../assets/bootstrap.min.css'

import Pagination from 'react-bootstrap/Pagination'


const PaginationComponent = (props) => {
    const [active, setActive] = useState(Number(props.history.location.pathname.split('/')[3]))
    const items = []

    for(let number = 1; number <= props.pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => {
                props.history.push(`/characters/page/${number}`)
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
                    props.history.push('/characters/page/1')
                }}/>
                <Pagination.Prev onClick={() => {
                    props.history.push(`/characters/page/${active-1}`)
                }}/>
                    {items}
                <Pagination.Next onClick={() => {
                    props.history.push(`/characters/page/${active+1}`)
                }}/>
                <Pagination.Last onClick={() => {
                    props.history.push(`/characters/page/${props.pages}`)
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

export default connect(mapStateToProps, { fetchCharacters })(PaginationComponent)