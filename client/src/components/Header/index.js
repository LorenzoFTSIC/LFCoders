import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const styles = {
  header: {
    minHeight: '350px',
    backgroundImage:
      'linear-gradient(to right, rgb(52, 9, 138) , rgb(236, 185, 236))',
    textAlign: 'center'

    // height:'calc(100vh - 40px)',
    // margin: 20,
    // display: "flex",
    // backgroundImage:"linear-gradient(to right, rgb(52, 9, 138) , rgb(236, 185, 236))",
    // textAlign: 'center',

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
    height: '100%',
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

const Header = ({ reasons }) => {
  // ^ Prop for rendering one sentence at a time in a type of carousel, but not doing that right now...
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header
      style={styles.header}
      className="bg-info text-dark display-flex align-center"
    >
      <div style={styles.headerContent} className="container">
        <div style={styles.headerSides}>
          {/* <Link style={styles.link} className="none" to="/"> */}
          <h1 style={styles.title} className="m-0 quote">
            L.F.Coders
          </h1>
          <div className="content-slider">
            <div className="slider">
              <div>
                {/* </Link> */}
                <ul>
                  <li className="anim1">
                    <p
                      className="m-0 quote"
                      style={{ fontSize: '1.75rem', fontWeight: '700' }}
                    >
                      Ideas that go beyond our current knowledge.
                    </p>
                  </li>

                  {/* <br /> */}
                  <li className="anim2">
                    <p
                      className="m-0 quote"
                      style={{ fontSize: '1.75rem', fontWeight: '700' }}
                    >
                      Working in a team.
                    </p>
                  </li>

                  {/* <br /> */}
                  <li className="anim3">
                    <p
                      className="m-0 quote"
                      style={{ fontSize: '1.75rem', fontWeight: '700' }}
                    >
                      Spreading the work load.
                    </p>
                  </li>

                  {/* <br /> */}
                  <li className="anim4">
                    <p
                      className="m-0 quote"
                      style={{ fontSize: '1.75rem', fontWeight: '700' }}
                    >
                      Bouncing ideas.
                    </p>
                  </li>

                  {/* <br /> */}
                  <li className="anim5">
                    <p
                      className="m-0 quote"
                      style={{ fontSize: '1.75rem', fontWeight: '700' }}
                    >
                      Meeting new people.
                    </p>
                  </li>

                  {/* <br /> */}
                  {/* <li className="anim1">
                    <p
                      className="m-0 quote"
                      style={{ fontSize: '1.75rem', fontWeight: '700' }}
                    >
                      Sharing ideas.
                    </p>
                  </li> */}
                  {/* ^ Removed because not enough anim# spots... */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.headerSides}>
          <p
            className="m-0 quote"
            style={{ fontSize: '1.75rem', fontWeight: '700' }}
          >
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
                  to="/login" data-toggle="modal" data-target=".bd-example-modal-lg-login"
                >
                  Login
                </Link>
                <Link
                  style={styles.button}
                  className="btn btn-lg btn-light m-2"
                  to="/signup" data-toggle="modal" data-target=".bd-example-modal-lg-signup"
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

// HTML/CSS quote slider by @cassidoo on CodePen: Pure Css Text Carousel 

export default Header;
