import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };
  const styles = {
    // login: {
    //   display: "flex",
    //   justifyContent: "center",
    //   flexDirection: "column",
    //   width: "65%",
    //   margin: "auto",
    // },
    // h4: {
    //   borderRadius: 0,
    //   textAlign: "center",
    //   backgroundColor: "#784faf",
    //   fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    // },
    input: {
      height: 35,
      margin: '3% 3% 0 3%',
      padding: '0 2%',
      color: '#784faf',
      borderRadius: 5
    },
    // submit: {
    //   backgroundColor: "#784faf",
    //   cursor: "pointer",
    //   width: "50%",
    //   justifyContent: "center",
    //   margin: "auto",
    //   color: "white",
    //   border: "none",
    //   borderRadius: 0,
    // },
    // center: {
    //   margin: "0 auto",
    // },
    // card: {
    //   borderRadius: 0,
    //   border: "none"
    // },
    // close: {
    //   background: "transparent",
    //   border: "none",
    //   fontSize: 26,
    //   color: "white",
    // },
    // noRadius: {
    //   borderRadius: 0,
    // }
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: ''
    });
  };

  return (
    <div
      className="modal fade bd-example-modal-lg-login"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg login">
        <div className="modalContainer">
          <h3 className="mainTitle">Login</h3>

          <div className="card-body">
            {data ? (
              <p>
                <Link to="/"> Success!</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  style={styles.input}
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  style={styles.input}
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={styles.submit}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
