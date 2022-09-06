import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';
import PasswordStr from '../utils/passwordStr';
import Carousel from 'react-bootstrap/Carousel';

// const zxcvbn = require("zxcvbn");

const styles = {
  input: {
    height: 35,
    width: "calc(100% - 50px)",
    margin: '0 3% 3% 3%',
    padding: '0 2%',
    color: '#784faf',
    borderRadius: 5
  },
  jsSlider: {
    color: '#784faf',
    marginBottom: 2
  },
  formContent: {
    margin: '0 3%'
  },
/*   modal: {
    maxHeight: "calc(100vh - 45px)",
    overflow: "scroll",
  }, */
  checkbox: {
    backgroundColor: "pink",
    borderColor: "pink",
  },
  formContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    margin: '0 3%'
  },
  title: {
    width: "fit-content",
    marginBottom: 0,
    padding: 20,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    background: "#333",
  },
  modal: {
    backgroundColor: "transparent",
    border: "none"
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: "#333",
    padding: 20,
    borderRadius: 6,
  },
  textarea: {
    width: "100%"
  }

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
    score: 0,
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  /* const toggleCheckboxValue = (index) => {
      setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  } */

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
        <div className="modal-dialog signup">
          <div style={styles.modal} className="modal-content modalContainer">
            <h3 className="mainTitle" style={styles.title}>Sign Up</h3>
            <div style={styles.center}>
              {data ? (
                <p>
                  <Link to="/">Success!</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={null}>
                  <Carousel.Item>
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
                     type="text"
                     value={formState.github}
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
                     required
                   />
                  </Carousel.Item>
                  <Carousel.Item>
                  <div className="form-group">
                     <h3 htmlFor="signUpBio" className="sectionHeading">
                       Add your bio
                     </h3>
                     <div style={styles.formContent}>
                       {/* <input
                         style={styles.input}
                         className="form-input"
                         placeholder="bio"
                         name="bio"
                         type="bio"
                         value={formState.bio || ""}
                         onChange={handleChange}
                         required
                       /> */}
                       <textarea
                         className="form-input"
                         placeholder="bio"
                         name="bio"
                         type="bio"
                         value={formState.bio || ""}
                         onChange={handleChange}
                         required
                         style={styles.textarea}
                         rows="5"></textarea>

                     </div>
                   </div>
                  </Carousel.Item>
                  <Carousel.Item>
                  <div>
                     <h3 className="sectionHeading">
                       Choose one of the following
                     </h3>
                     <div style={styles.formContent}>
                       <select
                         name="options"
                         className="form-input"
                         htmlFor="options"
                       >
                         <option value="ltc">Looking to Code</option>
                         <option value="lfc">Looking for Coders</option>
                       </select>
                     </div>
                   </div>
 
                   <div>
                   <h3 className="sectionHeading">Select Your Skills</h3>
                    <div style={styles.formContainer}>
                      
                      <div className="form-check">
                        <input className="form-check-input" style={styles.checkbox} type="checkbox" value="React" id="react"/>
                        <label className="form-check-label" htmlFor="react">
                          React
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" style={styles.checkbox} type="checkbox" value="Angular" id="angular"/>
                        <label className="form-check-label" htmlFor="angular">
                          Angular
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" style={styles.checkbox} type="checkbox" value="MongoDB" id="mongodb"/>
                        <label className="form-check-label" htmlFor="mongodb">
                          MongoDB
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" style={styles.checkbox} type="checkbox" value="MySQL" id="mysql"/>
                        <label className="form-check-label" htmlFor="mysql">
                          MySQL
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" style={styles.checkbox} type="checkbox" value="Express" id="express"/>
                        <label className="form-check-label" htmlFor="express">
                          Express
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" style={styles.checkbox} type="checkbox" value="Node" id="node"/>
                        <label className="form-check-label" htmlFor="node">
                          Nodejs
                        </label>
                      </div>
                    </div> 
                  </div>
                  <button
                    className="btn btn-block submit"
                    type="submit"
                    aria-label="Close"
                  >
                    Submit
                  </button>
                  </Carousel.Item>
                </Carousel>
                </form>
                /*  <form onSubmit={handleFormSubmit}>
 
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
                     type="text"
                     value={formState.github}
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
                     required
                   />
 
                   <div className="form-group">
                     <h3 htmlFor="signUpBio" className="sectionHeading">
                       Add your bio
                     </h3>
                     <div style={styles.formContent}>
                       <input
                         style={styles.input}
                         className="form-input"
                         placeholder="bio"
                         name="bio"
                         type="bio"
                         value={formState.bio}
                         onChange={handleChange}
                         required
                       />
                     </div>
                   </div>
 
                   <div className="pwStrRow">
                     {formState.score >= 1 && (
                       <div>
                         <PasswordStr score={formState.score} />
                         <button
                           className="pwShowHideBtn"
                           // onClick={pwMask} 
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
                     <h3 className="sectionHeading">
                       Choose one of the following
                     </h3>
                     <div style={styles.formContent}>
                       <select
                         name="options"
                         className="form-input"
                         htmlFor="options"
                       >
                         <option value="ltc">Looking to Code</option>
                         <option value="lfc">Looking for Coders</option>
                       </select>
                     </div>
                   </div>
 
                   <div>
                     <h3 className="sectionHeading">Select Your Skills</h3>
                     <div style={styles.formContainer}>
 
                       <div className="form-check">
                         <input className="form-check-input" style={styles.checkbox} type="checkbox" value="" id="html" />
                         <label className="form-check-label" htmlFor="html">
                           HTML
                         </label>
                       </div>
                       <div className="form-check">
                         <input className="form-check-input" style={styles.checkbox} type="checkbox" value="" id="css" />
                         <label className="form-check-label" htmlFor="css">
                           CSS
                         </label>
                       </div>
                       <div className="form-check">
                         <input className="form-check-input" style={styles.checkbox} type="checkbox" value="" id="cssframework" />
                         <label className="form-check-label" htmlFor="cssframework">
                           Css Frameworks
                         </label>
                       </div>
                       <div className="form-check">
                         <input className="form-check-input" style={styles.checkbox} type="checkbox" value="" id="js" />
                         <label className="form-check-label" htmlFor="js">
                           Javascript
                         </label>
                       </div>
                       <div className="form-check">
                         <input className="form-check-input" style={styles.checkbox} type="checkbox" value="" id="react" />
                         <label className="form-check-label" htmlFor="react">
                           React.js
                         </label>
                       </div>
                       <div className="form-check">
                         <input className="form-check-input" style={styles.checkbox} type="checkbox" value="" id="node" />
                         <label className="form-check-label" htmlFor="node">
                           Nodejs
                         </label>
                       </div>
                     </div>
                   </div>
                   <button
                     className="btn btn-block submit"
                     type="submit"
                     aria-label="Close"
                   >
                     Submit
                   </button>
                 </form> */
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
