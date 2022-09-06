import React, { useState } from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import { EDIT_BIO } from '../utils/mutations'

import { useMutation } from '@apollo/client';
// import { QUERY_BIO } from '../utils/queries';
// import { EDIT_BIO } from '../utils/mutations';

import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Auth from '../utils/auth';
import Avatar from '@mui/material/Avatar';
import avatar from '../assets/img/avatar.png';

// import CollabCube from '../component/CollabCube';
// ^ The component that will give structure to the individual collaborations a user has done

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
   
   flex: 1, 
   paddingLeft: "80px",
   paddingTop: "0px",
  },

  profileName: {
    fontSize: "35px",
    textDecoration: "underline"
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
  },
  name: {
    marginLeft: 20,
    color: "white"
  },
  button: {
    marginRight: 20,
    color: "white"
  }
};



// { profilecollabs }
// ^ Prop that represents the info which will be arrayed over and displayed in the "My Collabs" section
const Profile = () => {
  const { profileId } = useParams();

  const [open, setOpen] = React.useState(false);
  const [createProject, setCreateProject] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCreateProjectOpen = () => setCreateProject(true);
  const handleCreateProjectClose = () => setCreateProject(false);

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId }
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};
  console.log(profile._id)
  const [formState, setFormState] = useState({
    errors: {},
    // profileId: '',
    bio: ''
  });
  
  const [editBio, { error, Modeldata }] = useMutation(EDIT_BIO);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
  
    try {
      const { Modeldata } = await editBio({
        variables: { ...formState, profileId: profile._id }
      });
  
    } catch (e) {
      console.error(e);
    }
  };
  



  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <section style={style.profileHeading}>
        <div >
          <div>
            <Avatar
              alt="{profile.name}"
              src={avatar}
              sx={{ width: 300, height: 300, padding: 1, boxShadow: 20 }}
            />
          </div>
          
      // <div style={style.name}>
          // <h4>{profile.name}</h4>

          </div>

          <div className= "profileInfo" style={style.profileInfo}>
          <div >
          <h4  className= "profileName" style={style.profileName}> {profile.name}</h4>
          </div>
          <div>
          <h4>{profile.github}</h4>
          </div>
          <h5>I am {profile.status}</h5>
          {profile.email}
          </div>
        </div>
        

        <div>
          <Button className="btn btn-block" style={style.button} onClick={handleCreateProjectOpen}>
            Create Project
          </Button>
          <Modal
            className="modalPage"
            open={createProject}
            onClose={handleCreateProjectClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="modalContainer">
              <h3 className="mainTitle">Create Project</h3>
              <div id="modal-modal-description" style={style.center}>
                <section>
                  <div>
                    <h5 className="sectionHeading">Project Name</h5>
                    <textarea rows="1" cols="30" style={style.input}></textarea>
                  </div>
                  <div>
                    <h5 className="sectionHeading">Project Information</h5>
                    <div style={style.formContent}>
                      <textarea
                        class="form-control"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <h5 className="sectionHeading">Project Languages</h5>
                    <div style={style.formContent}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="html"/>
                        <label className="form-check-label" htmlFor="html">
                          HTML
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="css"/>
                        <label className="form-check-label" htmlFor="css">
                          CSS
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="cssframework"/>
                        <label className="form-check-label" htmlFor="cssframework">
                          Css Frameworks
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="js"/>
                        <label className="form-check-label" htmlFor="js">
                          Javascript
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="react"/>
                        <label className="form-check-label" htmlFor="react">
                          React.js
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="node"/>
                        <label className="form-check-label" htmlFor="node">
                          Nodejs
                        </label>
                      </div>
                    </div>
                  </div>


                </section>
                <button
                    className="btn btn-block submit"
                    type="submit"
                  >
                    Save
                  </button>
              </div>
              
            </Box>
            
          </Modal>
          {/* <Link to="/settings">
            <h5>Settings</h5>
          </Link> */}

          <Button className="btn btn-block" style={style.button} onClick={handleOpen}>
            Settings
          </Button>
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
                        onChange={handleChange}
                        name="bio"
                        class="form-control"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>


                </section>
                <button
                    className="btn btn-block submit"
                    type="submit"
                    onClick={handleFormSubmit}
                  >
                    Save
                  </button>
              </div>
              
            </Box>
            
          </Modal>
        </div>
      </section>

      {/* <section style={style.profileContent}> */}
      <div style={style.push}>
        <h5>My Bio</h5>
        <p>{profile.bio}</p>
      </div>

      <div style={style.push}>
        <h5>My Collabs</h5>
        {/* {collab ? (
          <div style={style.collabSquare}>
            {profilecollabs.map((collab) => (
              <CollabCube key={collab.id} collab={collab} />
            ))}
          </div>
        ) : (
          <p>Nothing yet!</p>
        )} */}

        {/* <div style={style.collabSquare}>
          {profilecollabs.map((collab) => (
            <CollabCube key={collab.id} collab={collab} />
          ))}
        </div> */}
        {/* ^ The div that will go through the collab info for the specific user */}
      </div>
      {/* </section> */}
    </div>
  );
};

export default Profile;
