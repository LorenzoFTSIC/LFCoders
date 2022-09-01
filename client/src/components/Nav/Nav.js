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
        <nav>
        <ul className="nav nav-tabs">
        <li>
        <Link to=''
        onClick={() => handlePageChange('Recent Collaborations')}
        className={currentPage === 'Recent Collaborations' ? 'nav-active nav-link' : 'nav-link'}>
        Recent Collaborations
        </Link>
        </li>

        <li className='nav-item'>
        <Link to='/search'
        onClick={() => handlePageChange('Search')}
        className={currentPage === 'Search' ? 'nav-active nav-link' : 'nav-link'}>
        Search
        </Link>
        </li>

        <li className='nav-item'>
        <Link to=''
        onClick={() => handlePageChange('Messages')}
        className={currentPage === 'Messages' ? 'nav-active nav-link' : 'nav-link'}>
        Messages
        </Link>
        </li>

        <li className='nav-item'>
        <Link to='/me'
        onClick={() => handlePageChange('Profile')}
        className={currentPage === 'Profile' ? 'nav-active nav-link' : 'nav-link'}>
        Profile
        </Link>
        </li>

        <li className='nav-item'>
        <Link to='/'
        onClick={() => handlePageChange('Logout')}
        className={currentPage === 'Logout' ? 'nav-active nav-link' : 'nav-link'}>
        Logout
        </Link>
        </li>
    </ul>
    </nav>
    );
}

export default Nav;