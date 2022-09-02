import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "65%",
    margin: "auto",
  },
  h4: {
    textAlign: "center",
    backgroundColor: "#784faf",
    borderRadius: 0

  },
  center: {
    margin: "0 auto"
  },
  input: {
    marginBottom: "20px",
    color: "#784faf",
  },
  jsSlider: {
    font: "auto",

  },
  submit: {
    backgroundColor: "#784faf",
    cursor: "pointer",
    color: "white",
    border: "none",
    borderRadius: 0,
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
      <div class="modal fade bd-example-modal-lg-signup" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg signup">
          <div class="modal-content">
            <div className="flex-row justify-center mb-4">
              <div className="col-12 col-lg-12" style={styles.center}>
                <div className="card" style={styles.card}>
                  <div class="modal-header" style={styles.h4}>
                    <h4 className="card-header text-light  p-2" style={styles.h4}>Sign Up</h4>
                    <button type="button" class="close" style={styles.close} data-dismiss="modal" aria-label="Close">
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
                        <Typography style={styles.jsSlider} gutterBottom>
                          HTML/CSS
                        </Typography>
                        <Slider defaultValue={0} aria-label="Default" aria-labelledby="js-slider" valueLabelDisplay="auto"
                          sx={{
                            color: '#784faf',
                          }} />
                        <Typography style={styles.jsSlider} gutterBottom>
                          Javascript
                        </Typography>
                        <Slider defaultValue={0} aria-label="Default" aria-labelledby="js-slider" valueLabelDisplay="auto"
                          sx={{
                            color: '#784faf',
                          }} />
                        <Typography style={styles.jsSlider} gutterBottom>
                          React
                        </Typography>
                        <Slider defaultValue={0} aria-label="Default" aria-labelledby="js-slider" valueLabelDisplay="auto"
                          sx={{
                            color: '#784faf',
                          }} />
                        <Typography style={styles.jsSlider} gutterBottom>
                          Javascript
                        </Typography>
                        <Slider defaultValue={0} aria-label="Default" aria-labelledby="js-slider" valueLabelDisplay="auto"
                          sx={{
                            color: '#784faf',
                          }} />
                        <Typography style={styles.jsSlider} gutterBottom>
                          Node.js
                        </Typography>
                        <Slider defaultValue={0} aria-label="Default" aria-labelledby="js-slider" valueLabelDisplay="auto"
                          sx={{
                            color: '#784faf',
                          }} />
                        <Typography style={styles.jsSlider} gutterBottom>
                          SQL
                        </Typography>
                        <Slider defaultValue={0} aria-label="Default" aria-labelledby="js-slider" valueLabelDisplay="auto"
                          sx={{
                            color: '#784faf',
                          }} />
                        <Typography style={styles.jsSlider} gutterBottom>
                          MERN
                        </Typography>
                        <Slider defaultValue={0} aria-label="Default" aria-labelledby="js-slider" valueLabelDisplay="auto"
                          sx={{
                            color: '#784faf',
                          }} />
                        <Typography class="js-slider" gutterBottom>
                          Javascript
                        </Typography>
                        <Slider defaultValue={0} aria-label="Default" aria-labelledby="js-slider" valueLabelDisplay="auto"
                          sx={{
                            color: '#784faf',
                            marginBottom: 4
                          }} />

                        <button
                          className="btn btn-block btn-info"
                          style={styles.submit}
                          type="submit"
                          aria-label="Close"
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
    </>
  );
};

export default Signup;
