import React, { useState } from 'react';
// import Button from '@mui/material/button';
import Modal from '@mui/material/Modal';
import { isNonEmptyArray } from '@apollo/client/utilities';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


// import LFCForm from '../components/LFCForm';
// import LTCForm from '../components/LTCForm/LTCForm';

const style = {
  Button: {
    minWidth: 100,
    background: 'rgba(255, 255, 255, 0.7)',
    border: '1px solid whitesmoke',
    borderRadius: 'none',
    color: '#161616',
  }
};

const Search = () => {


  const [searchVisi, setSearchVisi] = useState(true);

  const [formState, setFormState] = useState({
    errors: {},
    // profileId: '',
    bio: ''
  });

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
  
    setSearchVisi(current => !current)

    // try {
    //   const { Modeldata } = await editBio({
    //     variables: { ...formState, profileId: profile._id }
    //   });
  
    // } catch (e) {
    //   console.error(e);
    // }
  };
  
  const skills = [
    { label: "GraphQL" },
    { label: "React" },
    { label: "Angular" },
    { label: "Apollo" },
    { label: "HTML" },
    { label: "CSS" },
    { label: "SQL" },
    { label: "MySQL" },
    { label: "JQuery" },
    { label: "Javascript" },
    { label: "Bootstrap" },
    { label: "Tailwind" },
    { label: "Bulma" },
    { label: "MaterialUI" },
    { label: "Heroku" },
    { label: "AWS" }

  ]


  return (
    <div className="modalPage" 
    style={{display: searchVisi ? "flex" : "none" }}>
      <div className="modalContainer">
        {/* <div style={style.container}>
        <h1 className= "title" style={style.title}></h1>
      <div> */}
        <h3 className="mainTitle">LOOKING TO CODE</h3>
        <form>
          {/* <h3 className="sectionHeading">What I bring to the table:</h3>
          <div className="buttonContainer">
            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              // type="radio"
            >
              Front End
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              // type="radio"
            >
              Back End
            </button>
          </div> */}

          <h3 className="sectionHeading">Project Name:</h3>
          <TextField id="outlined-basic" 
          label="Outlined" 
          variant="outlined"
          style={style.Button} />

          <h3 className="sectionHeading">Skills Used:</h3>
          <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={skills}
          style={style.Button}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Skills" />} />
          {/* <h3 className="sectionHeading">Expected Timeline:</h3>
          <div className="buttonContainer">
            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              // type="radio"
            >
              5 Hours
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              // type="radio"
            >
              20 Hours
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              // type="radio"
            >
              40+ Hours
            </button> */}
          {/* </div> */}
          <h3 className="sectionHeading">Completion Status:</h3>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group">
            <FormControlLabel value="true" control={<Radio />} label="Completed" />
            <FormControlLabel value="false" control={<Radio />} label="In Progress" />
          </RadioGroup>
          {/* <h3 className="sectionHeading">I am available...</h3>
          <div className="buttonContainer">
            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="button"
            >
              Monday
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="button"
            >
              Tuesday
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              // type="radio"
            >
              Wednesday
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              // type="radio"
            >
              Thursday
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              // type="radio"
            >
              Friday
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              // type="radio"
            >
              Saturday
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              // type="radio"
            >
              Sunday
            </button>
          </div> */}
          <button
            className="btn btn-block submit"
            type="submit"
            aria-label="Close"
            // style={style.submit}
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    // </div>
    // </div>
    //   HTML and CSS by AlvaroTrigo on CodePen: TabbyTabs
  );
};

export default Search;
