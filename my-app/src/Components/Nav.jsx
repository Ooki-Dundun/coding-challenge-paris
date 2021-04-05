import React from 'react';
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/temperature'>Temperature</Link>
            <Link to='/customize-image'>Customize Image</Link>
        </nav>
    )
}

export default Nav;
