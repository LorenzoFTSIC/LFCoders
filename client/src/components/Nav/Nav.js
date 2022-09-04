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
    marginLeft: 5,
    padding: 10,
    borderRadius: ' 0 0 8px 8px',
    border: '2px solid purple',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    transition: '0.2s ease-in-out'
  },
  tabLabel: {
    color: 'whitesmoke',
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

        <li style={styles.tab} className="tab navTab">
          <Link
            style={styles.tabLabel}
            to="/search"
            onClick={() => handlePageChange('Search')}
            className={
              currentPage === 'Search' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Search
          </Link>
        </li>

        <li style={styles.tab} className="tab navTab">
          <Link
            style={styles.tabLabel}
            to=""
            onClick={() => handlePageChange('Messages')}
            className={
              currentPage === 'Messages' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Messages
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
