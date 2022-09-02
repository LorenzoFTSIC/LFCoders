import React from 'react';

import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


const styles = {
  nav: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  navtab: {
    backgroundColor: '#a4b5f3',
    marginLeft: '10px',
    boxShadow: '0px 0px 5px',
    color: 'whitesmoke',
    borderRadius: '3px'
  },
  navtabtext: {
    color: 'white',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold'
  }
};

function Nav({ currentPage, handlePageChange }) {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav style={styles.nav}>
      <ul className="nav">
        <li style={styles.navtab}>
          <Link
            style={styles.navtabtext}
            to=""
            onClick={() => handlePageChange('Recent Collaborations')}
            className={
              currentPage === 'Recent Collaborations'
                ? 'nav-active nav-link'
                : 'nav-link'
            }
          >
            Recent Collaborations
          </Link>
        </li>

        <li style={styles.navtab}>
          <Link
            style={styles.navtabtext}
            to="/search"
            onClick={() => handlePageChange('Search')}
            className={
              currentPage === 'Search' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Search
          </Link>
        </li>

        <li style={styles.navtab}>
          <Link
            style={styles.navtabtext}
            to=""
            onClick={() => handlePageChange('Messages')}
            className={
              currentPage === 'Messages' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Messages
          </Link>
        </li>

        <li style={styles.navtab}>
          <Link
            style={styles.navtabtext}
            to="/me"
            onClick={() => handlePageChange('Profile')}
            className={
              currentPage === 'Profile' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Profile
          </Link>
        </li>

        <li style={styles.navtab}>
          <Link
            style={styles.navtabtext}
            to="/"
            onClick={logout}
            className={
              currentPage === 'Logout' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
