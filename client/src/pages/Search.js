
import robotimg from '../assets/img/robot3.png';

import React, { useState } from 'react';

// import Button from '@mui/material/button';
import Modal from '@mui/material/Modal';
import { isNonEmptyArray } from '@apollo/client/utilities';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { gql, useLazyQuery } from '@apollo/client';

import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS_BY_SKILL } from '../utils/queries';

const style = {
  Button: {
    minWidth: 100,
    background: 'rgba(255, 255, 255, 0.7)',
    border: '1px solid whitesmoke',
    borderRadius: 'none',
    color: '#161616',
  },
  robotimg: {
    height: "170px",
    opacity: '0.8',
    marginTop:'50px',
    marginLeft: '50px',
    marginRight:'70px',
    top: '10px',
    position: 'absolute',
    right: '0'
  }, 
  modalPage:{
    paddingBottom:'50px'
  },
  
};

const Search = () => {
  const [searchVisi, setSearchVisi] = useState(true);

  const [formState, setFormState] = useState({
    errors: {},
    // profileId: '',
    name: '',
    skills: [],
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSkills = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      skills: [...formState.skills, value]
    });
  };

  const [queryProjectBySkill, { loading, error, data }] = useLazyQuery(
    QUERY_PROJECTS_BY_SKILL
  );

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;

  const projectBySkill = data?.projectBySkill || [];
  if (data) {
    console.log(data);
  }
  // const projectData = data?.name || [];

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setSearchVisi((current) => !current);

    queryProjectBySkill({ variables: { skillName: formState.skills } });
  };

  // try {
  //   const { test } = await useQuery(QUERY_PROJECTS_BY_SKILL,
  //     { variables: {skillName: formState.skills}}
  //   );

  // } catch(e) {

  // try {
  //   const { Modeldata } = await editBio({
  //     variables: { ...formState, profileId: profile._id }
  //   });

  // } catch (e) {
  //   console.error(e);
  // }
  // const { loading, data } = useQuery(QUERY_PROJECTS_BY_SKILL,
  //   { variables: {skillName: formState.skills}}
  // );

  // console.log(data)

  return (

    <div>
    <div className="modalPage" 
    style={{display: searchVisi ? "flex" : "none" }}>

      <div className="modalContainer">
        {/* <div style={style.container}>
        <h1 className= "title" style={style.title}></h1>
      <div> */}

      {/* <div className= "objects" style={style.objects} > */}
        <h3 className="mainTitle">LOOKING TO CODE</h3>
        {/*<img className="robotimg" src={robotimg} alt="robot with magnofying glass" style={style.robotimg}></img>*/}
       {/* </div> */}
        <form>
          {/* <h3 className="sectionHeading">What I bring to the table:</h3>
          <div className="buttonContainer">
            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
            >
              Front End
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
            >
              Back End
            </button>
          </div> */}

            <h3 className="sectionHeading">Project Name:</h3>
            <TextField
              id="outlined-basic"
              name="name"
              label="Project Name"
              variant="outlined"
              onChange={handleChange}
              style={style.Button}
            />

            <h3 className="sectionHeading">Skills Used:</h3>

            <FormGroup>
              <div>
                <FormControlLabel
                  control={<Checkbox value="React" onClick={handleSkills} />}
                  label="React"
                  name="skills"
                />
                <FormControlLabel
                  control={<Checkbox value="Angular" onClick={handleSkills} />}
                  label="Angular"
                  name="skills"
                />
                <FormControlLabel
                  control={<Checkbox value="Express" onClick={handleSkills} />}
                  label="Express"
                  name="skills"
                />
                <br />
                <FormControlLabel
                  control={<Checkbox value="MongoDB" onClick={handleSkills} />}
                  label="MongoDB"
                  name="skills"
                />
                <FormControlLabel
                  control={<Checkbox value="MySQL" onClick={handleSkills} />}
                  label="MySQL"
                  name="skills"
                />
                <FormControlLabel
                  control={<Checkbox value="Node" onClick={handleSkills} />}
                  label="Node"
                  name="skills"
                />
              </div>
            </FormGroup>

            {/* <Autocomplete
          // isOptionEqualToValue={(option, value) => option.id === value.id}
          disablePortal
          id="combo-box-demo"
          options={skills}
          style={style.Button}
          sx={{ width: 300 }} 
          onChange={handleChange} 
          name="skill" 
          renderInput={(params) => <TextField {...params} 
          onChange={handleChange}  name="skill" label="Skills" />} /> */}

            {/* <h3 className="sectionHeading">Expected Timeline:</h3>
          <div className="buttonContainer">
            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
            >
              5 Hours
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
            >
              20 Hours
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
            >
              40+ Hours
            </button> */}
            {/* </div> */}
            <h3 className="sectionHeading">Completion Status:</h3>
            <RadioGroup
              onChange={handleChange}
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="status"
            >
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="In Progress"
              />
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Completed"
              />
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
            >
              Wednesday
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
            >
              Thursday
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
            >
              Friday
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
            >
              Saturday
            </button>

            <button
              className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"

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

      <div style={{ display: searchVisi ? 'none' : 'block' }}>
        <div>

          <h3 className="mainTitle">Projects Looking for Coders</h3>
          {/* For every Project make a card */}
          <div>
            {projectBySkill &&
              projectBySkill.map((projectBySkill) => (
                <div key={projectBySkill._id}>
                  {/* Card Content */}
                  <div className="modalContainer projectContainer">
                    {/* User's Name */}
                    <h4 className="sectionHeading projectHeading">
                      {projectBySkill.name} <br />
                    </h4>

                    {/* User's Email */}
                    <h5 className="sectionHeading projectHeading projectHeadingBottom">
                      {projectBySkill.profile}
                    </h5>
                    {/* User's Bio */}
                    <h5 className="mainTitle">Describe:</h5>
                    <span className="projectContent">
                      "{projectBySkill.description}"
                    </span>
                    <br />
                  </div>
                </div>
              ))}
          </div>

         
          <button
            className="btn btn-block submit"
            type="submit"
            aria-label="Close"
            // style={style.submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    // </div>
    //   HTML and CSS by AlvaroTrigo on CodePen: TabbyTabs
  );
};

export default Search;
