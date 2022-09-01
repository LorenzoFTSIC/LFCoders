import React from 'react';

import { Link } from 'react-router-dom';


const styles = {
    navtab: {
        backgroundColor: '#a4b5f3',
        marginLeft: '20px'
      },
      navtabtext: {
        color: 'white',
        fontWeight: 'bold'
      }
};

function Nav({currentPage, handlePageChange}) {

    return(
        <nav>
        <ul className="nav nav-tabs">
        <li style={styles.navtab} >
        <Link style={styles.navtabtext} to=''
        onClick={() => handlePageChange('Recent Collaborations')}
        className={currentPage === 'Recent Collaborations' ? 'nav-active nav-link' : 'nav-link'}>
        Recent Collaborations
        </Link>
        </li>

        <li style={styles.navtab} className='nav-item'>
        <Link style={styles.navtabtext} to='/search'
        onClick={() => handlePageChange('Search')}
        className={currentPage === 'Search' ? 'nav-active nav-link' : 'nav-link'}>
        Search
        </Link>
        </li>

        <li style={styles.navtab} className='nav-item'>
        <Link style={styles.navtabtext} to=''
        onClick={() => handlePageChange('Messages')}
        className={currentPage === 'Messages' ? 'nav-active nav-link' : 'nav-link'}>
        Messages
        </Link>
        </li>

        <li style={styles.navtab} className='nav-item'>
        <Link style={styles.navtabtext} to='/me'
        onClick={() => handlePageChange('Profile')}
        className={currentPage === 'Profile' ? 'nav-active nav-link' : 'nav-link'}>
        Profile
        </Link>
        </li>

        <li style={styles.navtab} className='nav-item'>
        <Link style={styles.navtabtext} to='/'
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