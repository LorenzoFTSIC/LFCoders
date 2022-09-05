import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';
import PasswordStr from '../utils/passwordStr';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
// const zxcvbn = require("zxcvbn");

const styles = {
  // form: {
  //   display: "flex",
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   width: "65%",
  //   margin: "auto",
  // },
  // h4: {
  //   textAlign: "center",
  //   backgroundColor: "#784faf",
  //   borderRadius: 0,
  //   fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  // },
  // center: {
  //   margin: "0 auto"
  // },
  input: {
    marginBottom: "20px",
    color: "#784faf",
  },
  // jsSlider: {
  //   fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  // },
  // submit: {
  //   backgroundColor: "#784faf",
  //   cursor: "pointer",
  //   color: "white",
  //   border: "none",
  //   borderRadius: 0,
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
  // grid: {
  //   display: "grid",
  //   gridTemplateColumns: "1fr 1fr",
  // },
  // noRadius: {
  //   borderRadius: 0,
  // },
  // bio: {
  //   marginBottom: 20
  // }
};

/* var pwMask = (event) => {
  event.preventDefault();
  this.setState(state =>
    Object.assign({}, state, {
      type: this.state.type === "password" ? "input" : "password",
      btnTxt: this.state.btnTxt === "show" ? "hide" : "show"
    })
  );
} */

const Signup = () => {
  const [formState, setFormState] = useState({
    errors: {},
    name: '',
    email: '',
    password: '',
    bio: '',
    score: 0
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState }
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  /*   var pwHandleChange = (event) => {
    const field = event.target.name;
    const user = formState.user;
    formState.name[field] = event.target.value;

    setFormState(user)
  
    this.setState({
      user
    }); 
  
    if (event.target.value === "") {
       this.setState(state =>
        Object.assign({}, state, {
          score: "null"
        })
      ); 
      setFormState(formState.score === null)
    } else {
      var pw = zxcvbn(event.target.value);
     this.setState(state =>
        Object.assign({}, state, {
          score: pw.score + 1
        })
      ); 
      setFormState(formState.score + 1)
    }
  } */

  /*   const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }); */

  /*   const checkValidation = () => {
    let errors = validation;

    if (!formState.name.trim()) {
      errors.name = "Name is required";
    } else {
      errors.name = "";
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!formState.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    //password validation
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = formState.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    if (!formState.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (formState.confirmPassword !== formState.Password) {
      errors.confirmPassword = "Password does not match confirmation password";
    } else {
      errors.password = "";
    }

    setValidation(errors);
  }; */
  /* 
  useEffect(() => {
    checkValidation();
  }, [formState]); */

  return (
    <>
      <div
        className="modal fade bd-example-modal-lg-signup"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg signup">
          <div className="modalContainer">
            <h4 className="mainTitle">Sign Up</h4>
            <div>
              {data ? (
                <p>
                  <Link to="/">Success!</Link>
                </p>
              ) : (
                  <form onSubmit={handleFormSubmit}>
                    <h3 className="sectionHeading">
                      Let's get started! 
                    </h3>
                  <input
                    style={styles.input}
                    className="form-input"
                    placeholder="Your username"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    style={styles.input}
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    style={styles.input}
                    className="form-input"
                    placeholder="Your GitHub"
                    name="github"
                    type="url"
                    value={formState.github}
                    onChange={handleChange}
                    required
                  />
                  <input
                    style={styles.input}
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    required
                  />

                  <div class="form-group">
                    <h3 for="signUpBio" className="sectionHeading">
                      Add your bio
                    </h3>
                    <textarea
                      style={styles.bio}
                      class="form-control"
                      id="signUpBio"
                      rows="4"
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="pwStrRow">
                    {formState.score >= 1 && (
                      <div>
                        <PasswordStr score={formState.score} />
                        <button
                          className="pwShowHideBtn"
                          /* onClick={pwMask} */
                          style={{
                            position: 'relative',
                            left: '50%',
                            transform: 'translateX(-50%)'
                          }}
                        ></button>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="sectionHeading">Choose one of the following:</h3>
                    <select name="options" className="form-input" for="options">
                      <option value="ltc">Looking to Code</option>
                      <option value="lfc">Looking for Coders</option>
                    </select>
                  </div>

                    <div style={styles.grid}>
                      <h3 className="sectionHeading">
                          Assess Your Skills
                      </h3>
                    <Typography style={styles.jsSlider} gutterBottom>
                      HTML/CSS
                    </Typography>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      aria-labelledby="js-slider"
                      valueLabelDisplay="auto"
                      sx={{
                        color: '#784faf',
                        marginBottom: 2
                      }}
                    />
                    <Typography style={styles.jsSlider} gutterBottom>
                      Javascript
                    </Typography>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      aria-labelledby="js-slider"
                      valueLabelDisplay="auto"
                      sx={{
                        color: '#784faf',
                        marginBottom: 2
                      }}
                    />
                    <Typography style={styles.jsSlider} gutterBottom>
                      React
                    </Typography>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      aria-labelledby="js-slider"
                      valueLabelDisplay="auto"
                      sx={{
                        color: '#784faf',
                        marginBottom: 2
                      }}
                    />
                    <Typography style={styles.jsSlider} gutterBottom>
                      Javascript
                    </Typography>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      aria-labelledby="js-slider"
                      valueLabelDisplay="auto"
                      sx={{
                        color: '#784faf',
                        marginBottom: 2
                      }}
                    />
                    <Typography style={styles.jsSlider} gutterBottom>
                      Node.js
                    </Typography>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      aria-labelledby="js-slider"
                      valueLabelDisplay="auto"
                      sx={{
                        color: '#784faf',
                        marginBottom: 2
                      }}
                    />
                    <Typography style={styles.jsSlider} gutterBottom>
                      SQL
                    </Typography>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      aria-labelledby="js-slider"
                      valueLabelDisplay="auto"
                      sx={{
                        color: '#784faf',
                        marginBottom: 2
                      }}
                    />
                    <Typography style={styles.jsSlider} gutterBottom>
                      MERN
                    </Typography>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      aria-labelledby="js-slider"
                      valueLabelDisplay="auto"
                      sx={{
                        color: '#784faf',
                        marginBottom: 2
                      }}
                    />
                    <Typography className="js-slider" gutterBottom>
                      Javascript
                    </Typography>
                    <Slider
                      defaultValue={0}
                      aria-label="Default"
                      aria-labelledby="js-slider"
                      valueLabelDisplay="auto"
                      sx={{
                        color: '#784faf',
                        marginBottom: 4
                      }}
                    />
                  </div>
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
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Signup;
