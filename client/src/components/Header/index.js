import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const styles = {
  card: {
    height:'400px',
    margin: 20,
    backgroundImage:"linear-gradient(to right, rgb(52, 9, 138) , rgb(236, 185, 236))",
    textAlign: 'center',
  },
  header: {
    color:'white',
    paddingTop:'90px'
  },

  header1: {
    color:'white',
    paddingTop:'30px',
    fontSize: '3rem',
    fontFamily: 'Segoe UI',
  },
  
  link: {
    textDecoration: 'none',
  },

  login: {
    backgroundColor: '#a4b5f3',
    color: '#58497b'
  },

  signup: {
    backgroundColor: '#a4b5f3',
    color: '#58497b'
  }
  
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header style={styles.card} className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div style={styles.header} className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link style={styles.link} className="none" to="/" >
          <h1  style={styles.header1} className="m-0">
            Tech Friends
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Meet your new programming pals.
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link style={styles.login} className="btn btn-lg btn-light m-2" to="/login">
                Login
              </Link>
              <Link style={styles.signup} className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
