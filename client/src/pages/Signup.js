import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
const styles = {
  form: {
    display:"flex",
    justifyContent: "center",
    flexDirection: "column",
    width:"75%",
    margin:"auto",
  },
  h4: {
    textAlign:"center",
    
  },
  center: {
    margin:"0 auto"
  },
  input:{
    marginBottom: "20px"
  }
}

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-8" style={styles.center}>
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2"  style={styles.h4}>Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form style={styles.form} onSubmit={handleFormSubmit}>
                <input 
                  style={styles.input} 
                  className="form-input"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
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
                <Typography id="js-slider" gutterBottom>
                Javascript
              </Typography>
                <Slider defaultValue={0} aria-label="Default" aria-labelledby="js-slider" valueLabelDisplay="auto" />

                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
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
    </main> 
    </>
  );
};

export default Signup;
