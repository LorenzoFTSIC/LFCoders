import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '@mui/material/Modal';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';
import PasswordStr from '../utils/passwordStr';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
// const zxcvbn = require("zxcvbn");

const style = {
    roundImg: {
      height: '200px',
      width: '200px',
      border: '1px solid black',
      borderRadius: '50%'
    },
    profileHeading: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    },
    profileInfo: {
      display: 'flex',
      alignItems: 'flex-end'
    },
    push: {
      marginTop: '3rem',
      color: 'white'
    },
    settingsModal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4
    },
    input: {
      height: 35,
      margin: '3% 3% 0 3%',
      padding: '0 2%',
      color: '#784faf',
      borderRadius: 5
    },
    center: { 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    formContent: {
      margin: '3%'
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

const editProfile = () => {
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

  const { profileId } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Modal
      className="modalPage"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modalContainer">
        <h3 className="mainTitle">Settings</h3>
        <div id="modal-modal-description" style={style.center}>
          <section>
            <div>
              <h5 className="sectionHeading">Name</h5>
              <textarea rows="1" cols="30" style={style.input}></textarea>
            </div>
            <div>
              <h5 className="sectionHeading">Status</h5>
              <select name="options" id="options" style={style.input}>
                <option value="looking to code">Looking To Code</option>
                <option value="looking for coders">
                  Looking For Coders
                </option>
                <option value="just looking">Just Looking</option>
              </select>
            </div>
            <div>
              <h5 className="sectionHeading">My Bio</h5>
              <div style={style.formContent}>
                <textarea
                  class="form-control"
                  rows="4"
                ></textarea>
              </div>
            </div>


          </section>
          <button
              className="btn btn-block submit"
              type="submit"
              // onClick={}
            >
              Save
            </button>
        </div>
        
      </Box>
      
    </Modal>
    );
  };
}
export default editProfile;
