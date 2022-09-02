import React, { useState } from 'react';

// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_BIO } from '../utils/queries';
// import { EDIT_BIO } from '../utils/mutations';

const Settings = () => {
  const [textarea, setTextarea] = useState('');

  const handleChange = (e) => {
    setTextarea(e.target.value);
  };

    //   let { id } = useParams();

  // const { loading, data } = useQuery(QUERY_BIO, {
  //   variables: { _id: id },
  // });

  // QUERY PROFILE NOT THE QUERY_BIO *** 

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

  
  // PUTTING SETTINGS AS A MODAL SO THAT THE INFORMATION COULD THEN BE BROUGHT IN AS A PROP 
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
