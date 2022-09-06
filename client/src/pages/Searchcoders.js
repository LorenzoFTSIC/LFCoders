import React, { useState } from 'react';
import robotimg from '../assets/img/robot5.png';
import { gql, useLazyQuery } from "@apollo/client";
import { QUERY_PROFILES_BY_SKILL } from '../utils/queries'


const styles = {

    checkbox: {
      backgroundColor: "pink",
      borderColor: "pink",
    },
    robotimg: {
        height: "150px",
        opacity: '0.8',
        marginTop:'40px',
        marginLeft: '50px'
     
        
      }, 
    formContainer: {
      marginTop: '20px'
    },

    modalPage:{
        marginBottom: '40px'
    },

    formContent:{
        display: "flex",
        marginLeft:'20px'
        // aligntItems: "center"
      
    }
  
  };


const Searchcoders = () => {

  const [formState, setFormState] = useState({
    errors: {},
    name: '',
    skills: [],
    status: '',
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

  const [queryProjectBySkill, { loading, error, data }] = useLazyQuery(QUERY_PROFILES_BY_SKILL);

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;

  const projectData = data?.name || [];
  console.log(data)

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  

    queryProjectBySkill({ variables: { skillName: formState.skills } });

  }


  return (
    <div className="modalPage" style={styles.modalPage}>
      <div className="modalContainer">
        {/* <div style={style.container}>
        <h1 className= "title" style={style.title}></h1>
      <div> */}
        <h3 className="mainTitle" style={styles.mainTitle}>LOOKING FOR CODERS
      </h3>
      
        <form >
        <div style={styles.formContent}>
        <div>
                    <h3 className="sectionHeading">Find someone with these skills:</h3>
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
                        <input className="form-check-input" style={styles.checkbox} type="checkbox" value="" id="node"/>
                        <label className="form-check-label" htmlFor="node">
                          Nodejs
                        </label>
                      </div>
                    </div> 
                  </div>
                  <img className="robotimg" src={robotimg} alt="robot with magnofying glass" style={styles.robotimg}></img>
                  </div>
                  <button
                    className="btn btn-block submit"
                    type="submit"
                    aria-label="Close"
                    onClick={handleFormSubmit}
                  >
                    Submit
                  </button>
                  </form>
     </div>
     </div>
    //   HTML and CSS by AlvaroTrigo on CodePen: TabbyTabs
  );
};

export default Searchcoders;
