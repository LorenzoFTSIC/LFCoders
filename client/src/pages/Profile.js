import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
// ^ Link
import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// ^ Lines 4 - 7 is the Settings Modal

import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

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
  }
};

// { profilecollabs }
// ^ Prop that represents the info which will be arrayed over and displayed in the "My Collabs" section
const Profile = () => {
  const { profileId } = useParams();

  // SETTINGS MODAL ==================
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [textarea, setTextarea] = useState('');
  // ================================

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId }
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};
  // console.log(profile);
  const [profileBio, setProfileBio] = useState(profile.bio);
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

  // SETTINGS MODAL ==================
  // Grabbing changes in textarea 
  const handleChange = (e) => {
    setTextarea(e.target.value);
  };

  // Saving and rendering changes onto the page... NOT IN THE DB 
  const handleButtonClick = (e) => {
    setProfileBio(textarea);
  };
  // ================================

  return (
    // UPDATE THE ./utils/queries.js WITH STATUS AND SKILLS TO SEE IT ON THE PAGE
    <div>
      <section style={style.profileHeading}>
        <div style={style.profileInfo}>
          <div style={style.roundImg}>
            <img alt={profile.name}>{profile.img}</img>
            {/* WORKS - alt attribute renders the user's name */}
          </div>

          <h4>{profile.name}</h4>
          {/* WORKS - name in DB renders */}

          <h5>I am {profile.status}</h5>
          {/* BROKEN - add to Sign up for AND ./utils/queries.js */}
        </div>

        <div>
          {/* <Link to="/settings">
            <h5>Settings</h5>
          </Link> */}
          {/* WORKS - links to /settings */}

          <Button onClick={handleOpen}>Settings</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.settingsModal}>
              <Typography id="modal-modal-title" variant="h3" component="h2">
                Settings
              </Typography>
              <div id="modal-modal-description" sx={{ mt: 2 }}>
                <section>
                  <div>
                    <h5>My Bio</h5>
                    <textarea value={textarea} onChange={handleChange} />
                    <button onClick={handleButtonClick}>Save Changes</button>
                  </div>
                </section>
              </div>
            </Box>
          </Modal>
        </div>
      </section>

      {/* <section style={style.profileContent}> */}
      <div style={style.push}>
        <h5>My Bio</h5>
        <p>{profileBio ? profileBio : profile.bio} </p>
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
