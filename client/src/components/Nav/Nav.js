import React from 'react';

import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const styles = {
  tabs: {
    display: 'flex',
    margin: '-2px'
  },
  tab: {
    width: 140,
    flex: 1,
    height: 75,
    marginLeft: '1%',
    paddingBottom: '.5%',
    borderRadius: ' 0 0 8px 8px',
    border: '1.8px solid whitesmoke',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    transition: '0.2s ease-in-out'
  },
  tabLabel: {
    color: '#161616',
    fontSize: '1.2rem',
    fontWeight: 600
  }
};

function Nav({ currentPage, handlePageChange }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav style={styles.tabs} className="tabs">
      <ul className="nav">
        <li style={styles.tab} className="tab navTab">
          <Link
            style={styles.tabLabel}
            to="/"
            onClick={() => handlePageChange('Recent Collaborations')}
            className={
              currentPage === 'Recent Collaborations'
                ? 'nav-active nav-link'
                : 'nav-link'
            }
          >
            Recent Collabs
          </Link>
        </li>

        <li style={styles.tab} className="tab navTab">
          <Link
            style={styles.tabLabel}
            to="/search"
            onClick={() => handlePageChange('Search')}
            className={
              currentPage === 'Search' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Looking to Code
          </Link>
        </li>

        <li style={styles.tab} className="tab navTab">
          <Link
            style={styles.tabLabel}
            to="/searchcoders"
            onClick={() => handlePageChange('Messages')}
            className={
              currentPage === 'Messages' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Find Coders
          </Link>
        </li>

        <li style={styles.tab} className="tab navTab">
          <Link
            style={styles.tabLabel}
            to="/me"
            onClick={() => handlePageChange('Profile')}
            className={
              currentPage === 'Profile' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Profile
          </Link>
        </li>

        <li style={styles.tab} className="tab navTab">
          <Link
            style={styles.tabLabel}
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
