import React, { useState } from 'react';

const Settings = () => {
  const [textarea, setTextarea] = useState('{profile.bio}');
  // ^ I'm hoping this variable will bring in whatever the poster originally put as a Bio 

  const handleChange = (e) => {
    setTextarea(e.target.value);
  };

  return (
    <>
      <h2>Settings</h2>
      <section>
        <div>
          <h5>My Bio</h5>
          <textarea value={textarea} onChange={handleChange} />
          <button>Save Changes</button>
        </div>
      </section>
    </>
  );
};

export default Settings;
