import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const styles = {
  header: {
    minHeight: '350px',
    backgroundImage:
      'linear-gradient(to right, rgb(52, 9, 138) , rgb(236, 185, 236))',
    textAlign: 'center'
  },
  headerContent: {
    padding: 0, 
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around'
  },
  headerSides: { 
    width: '50%'
  },
  title: {
    color: 'white',
    fontSize: '3rem',
    fontFamily: 'Segoe UI'
  },

  link: {
    textDecoration: 'none'
  },

  button: {
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
    <header
      style={styles.header}
      className="bg-info text-dark display-flex align-center"
    >
      <div
        style={styles.headerContent}
        className="container"
      >
        <div style={styles.headerSides}>
          {/* <Link style={styles.link} className="none" to="/"> */}
          <h1 style={styles.title} className="m-0">
            L.F.Coders
          </h1>
          {/* </Link> */}
          <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
            Ideas that go beyond our current knowledge. <br /> Working in a
            team. <br />
            Spreading the work load. <br />
            Bouncing ideas. <br />
            Meeting new people. <br />
            Sharing ideas.
          </p>
        </div>

        <div style={styles.headerSides}>
          <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
            Whatever your reason, LFC is here to get you in touch with the right
            people for your next coding project.
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
                <Link
                  style={styles.button}
                  className="btn btn-lg btn-light m-2"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  style={styles.button}
                  className="btn btn-lg btn-light m-2"
                  to="/signup"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
