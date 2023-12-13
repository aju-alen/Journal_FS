import React from 'react'
import { Link } from 'react-router-dom'

const NavLinksStatic = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/" >Journals</Link>
            <Link to="/" >Proceedings</Link>
            <Link to="/" >Conferences</Link>
            <Link to="/" >Submit Manuscript</Link>
        </>
    )
}

export default NavLinksStatic