import React from 'react';

import { Link } from 'react-router-dom';


// const styles = {
//   navbarStyle: {
//     background: 'pink',
//     justifyContent: 'flex-end',
//   },
// };

function Nav({currentPage, handlePageChange}) {

    return(
        //nav
        <nav className="navbar">
        <h1 className="navheading">Karen Martinez Guerrero</h1>
    
        <ul className="nav nav-tabs">
        <li className='nav-item'>
        <Link to=''
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-active nav-link' : 'nav-link'}>
        About
        </Link>
        </li>

        <li className='nav-item'>
        <Link to='/Portfolio-React/contact'
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-active nav-link' : 'nav-link'}>
        Contact
        </Link>
        </li>

        <li className='nav-item'>
        <Link to='/Portfolio-React/resume'
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-active nav-link' : 'nav-link'}>
        Resume
        </Link>
        </li>

        <li className='nav-item'>
        <Link to='/Portfolio-React/portfolio'
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-active nav-link' : 'nav-link'}>
        Portfolio
        </Link>
        </li>
    </ul>
    </nav>
    );
}

export default Nav;