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
      [name]: value,
    });
  };
  const styles = {
    login:{
      display:"flex",
      justifyContent: "center",
      flexDirection: "column",
      width:"65%",
      margin:"auto",
    },
    h4: {
      borderRadius: 0,
      textAlign:"center",
     backgroundColor:"#784faf",
     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;",

    },
    input:{
      marginBottom: "20px",
      color:"#784faf",
    },
    submit: {
      backgroundColor:"#784faf",
      cursor: "pointer",
      width:"50%",
      justifyContent:"center",
      margin:"auto",
      color: "white",
      border: "none",
      borderRadius: 0,
   },
   center: {
    margin:"0 auto",
   },
   card: {
     borderRadius: 0,
     border: "none"
   },
   close: {
    background: "transparent",
    border: "none",
    fontSize: 26,
    color: "white",
  },
  noRadius: {
    borderRadius: 0,
  }
  }
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
   
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div class="modal fade bd-example-modal-lg-login" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg login">
      <div class="modal-content" style={styles.noRadius}>
    <div className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-12" style={styles.center}>
        <div className="card" style={styles.card}>
          <div class="modal-header" style={styles.h4}>
          <h4 className="card-header  text-light p-2" style={styles.h4}>Login</h4>
          <button type="button" style={styles.close} class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form style={styles.login} onSubmit={handleFormSubmit}>
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
    </div>
    </div>
    </div>
  );
};

export default Login;
