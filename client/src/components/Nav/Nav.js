import React from 'react';

import { Link } from 'react-router-dom';

const styles = {
  // nav: {
  //   display: 'flex',
  //   alignItems: 'flex-end'
  // },
  // navtab: {
  //   backgroundColor: '#a4b5f3',
  //   marginLeft: '10px',
  //   boxShadow: '0px 0px 5px',
  //   color: 'whitesmoke',
  //   borderRadius: '3px'
  // },
  // navtabtext: {
  //   color: 'white',
  //   // fontFamily: 'Segoe UI',
  //   // fontWeight: 'bold'
  // }
  tabs: {
    // overflow keeps the edges rounded when they're all clumped together
    overflow: 'hidden',
    // borderRadiusTop: 10,
    // borderRadius: '8px 8px 0 0',
    // position: 'relative',
    display: 'flex'
    // justifyContent: 'flex-end'
  },
  tab: {
    width: 140,
    flex: 1
  },
  tabLabel: {
    height: 75,
    marginLeft: 5,
    padding: 10,
    borderRadius: '8px 8px 0 0',

    background: '#161616',
    color: 'whitesmoke',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background 0.5s ease'
  },
  // tabContent: {
  //   padding: 20,
  //   background: '#161616',
  //   position: 'absolute',
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  //   top: 40,
  //   transition: 'opacity 0.8s ease, transform 0.8s ease',
  //   // show/hide
  //   opacity: 0,
  //   transform: 'scale(0.1)',
  //   transformOrigin: 'top left'
  // }
};

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.tabs} className="tabs">
      {/* nav */}
      <ul className="nav">
        <li style={styles.tab} className="tab">
          {/* navtab */}
          <Link
            style={styles.tabLabel}
            // navtabtext
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

        <li style={styles.tab} className="tab">
          {/* navtab */}
          <Link
            style={styles.tabLabel}
            // navtabtext
            to="/search"
            onClick={() => handlePageChange('Search')}
            className={
              currentPage === 'Search' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Search
          </Link>
        </li>

        <li style={styles.tab} className="tab">
          {/* navtab */}
          <Link
            style={styles.tabLabel}
            // navtabtext
            to=""
            onClick={() => handlePageChange('Messages')}
            className={
              currentPage === 'Messages' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Messages
          </Link>
        </li>

        <li style={styles.tab} className="tab">
          {/* navtab */}
          <Link
            style={styles.tabLabel}
            // navtabtext
            to="/me"
            onClick={() => handlePageChange('Profile')}
            className={
              currentPage === 'Profile' ? 'nav-active nav-link' : 'nav-link'
            }
          >
            Profile
          </Link>
        </li>

        <li style={styles.tab} className="tab">
          {/* navtab */}
          <Link
            style={styles.tabLabel}
            // navtabtext
            to="/"
            onClick={() => handlePageChange('Logout')}
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
