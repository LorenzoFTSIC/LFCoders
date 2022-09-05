import React from 'react';
import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

const styles = {
  header: {
    minHeight: '350px',
    backgroundImage:
      'linear-gradient(to right, rgb(52, 9, 138) , rgb(236, 185, 236))',
    textAlign: 'center'
  },
  headerContent: {
    padding: '100px 0 0 0 ',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  headerSides: {
    width: '50%',
    height: '100%'
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
    width: 100,
    margin: 20
  }
};

const Header = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  return (
    <header style={styles.header} className="display-flex align-center headerFade">
      <div style={styles.headerContent} className="container">
        <div style={styles.headerSides}>
          {/* LEFT SIDE */}
          <h1 style={styles.title} className="quote">
            Looking For Coders
          </h1>
          <div className="content-slider">
            <div className="slider">
              <div>
                <ul>
                  <li className="anim1">
                    <p className="quote">
                      Ideas that go beyond our current knowledge.
                    </p>
                  </li>

                  <li className="anim2">
                    <p className="quote">Working in a team.</p>
                  </li>

                  <li className="anim3">
                    <p className="quote">Spreading the work load.</p>
                  </li>

                  <li className="anim4">
                    <p className="quote">Bouncing ideas.</p>
                  </li>

                  <li className="anim5">
                    <p className="quote">Meeting new people.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.headerSides}>
          <p style={{ fontSize: '1.75rem', fontWeight: '700' }}>
            Whatever your reason, LFC is here to get you in touch with the right
            people for your next coding project.
          </p>
          <div>
            {/* {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-primary m-2" to="/me">
                  View My Profile
                </Link>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <> */}
                <Link
                  style={styles.button}
                  className="btn"
                  to="/login"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg-login"
                >
                  Login
                </Link>
                <Link
                  style={styles.button}
                  className="btn"
                  to="/signup"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg-signup"
                >
                  Signup
                </Link>
              {/* </>
            )} */}
          </div>
        </div>
      </div>
    </header>
  );
};

// HTML/CSS quote slider by @cassidoo on CodePen: Pure Css Text Carousel

export default Header;
