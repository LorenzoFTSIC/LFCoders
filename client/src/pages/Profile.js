import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_BIO } from '../utils/queries';
// import { EDIT_BIO } from '../utils/mutations';

import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Auth from '../utils/auth';
import Avatar from '@mui/material/Avatar';
import avatar from '../assets/img/avatar.png';
import { EDIT_BIO } from '../utils/mutations';

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

// { profilecollabs }
// ^ Prop that represents the info which will be arrayed over and displayed in the "My Collabs" section
const Profile = () => {
  //   let { id } = useParams();

  // const { loading, data } = useQuery(QUERY_PROFILE, {
  //   variables: { _id: id },
  // });

  // const profile = data?.profile || [];

  // const [editBio, { error }] = useMutation(EDIT_BIO);

  // const handleBio = async (bio) => {
  //   try {
  //     await editBio({
  //       variables: { _id: id, bio: bio },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const { profileId } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // LEWIS
  // const [textarea, setTextarea] = useState('');
  //

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId }
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};

  // 
  // NEW
  // 
  // const [profileSettings, setProfileSettings] = useState({
  //   bio: ''
  // });
  // const [editBio] = useMutation(EDIT_BIO);

  // const handleChange = (event) => { 
  //   const { name, value } = event.target.value;

  //   setProfileSettings({ 
  //     ...profileSettings,
  //     [name]: value
  //   })
  // }

  // const handleSaveSettings = async (event) => { 
  //   event.preventDefault();
  //   console.log(setProfileSettings);

  //   try { 
  //     const { data } = await editBio({
  //       variables: { ...profileSettings }
  //     });
  //   } catch (e) { 
  //     console.error(e);
  //   }
  // }
  // 
  // 
  //
  
  
  // 
  // NEW NEW 
  // 
  // const handleChange = event => { 
  //   event.prevenetDefault();

  // }
  // 
  // 
  // 

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
        <div style={style.profileInfo}>
          <div>
            <Avatar
              alt={profile.name}
              src={avatar}
              sx={{ width: 300, height: 300, boxShadow: 20 }}
            />
          </div>

          <h4>{profile.name}</h4>

          <h5>I am {profile.status}</h5>
        </div>

        <div>
          {/* <Link to="/settings">
            <h5>Settings</h5>
          </Link> */}

          <Button className="btn btn-block" onClick={handleOpen}>
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
                  {/* <div>
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
                  </div> */}

                  <div>
                    {/* BIO  */}
                    <h5 className="sectionHeading">My Bio</h5>
                    <div style={style.formContent}>
                      <textarea
                        // value={profileBio}
                        class="form-control"
                        rows="4"
                        // onChange={(event) => setProfileBio(event.target.value)}
                      ></textarea>
                    </div>
                    {/* END - BIO */}
                  </div>
                </section>
                <button
                  className="btn btn-block submit"
                  type="submit"
                  // onClick={onSubmit}
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
