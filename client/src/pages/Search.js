import React from 'react';
// import Button from '@mui/material/button';

// import LFCForm from '../components/LFCForm';
// import LTCForm from '../components/LTCForm/LTCForm';

const style = {
  Button: {
    minWidth: 100,
    background: 'rgba(255, 255, 255, 0.7)',
    border: '1px solid whitesmoke',
    borderRadius: 'none',
    color: '#161616',
  },
  modalPage:{
    paddingBottom:'50px'
  }
};

const Search = () => {
  return (
    <div className="modalPage" style={style.modalPage}>
      <div className="modalContainer">
        {/* <div style={style.container}>
        <h1 className= "title" style={style.title}></h1>
      <div> */}
        <h3 className="mainTitle">LOOKING TO CODE</h3>
        <form>
          <h3 className="sectionHeading">What I bring to the table:</h3>
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
          </div>

          <h3 className="sectionHeading">Expected Timeline:</h3>
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
            </button>
          </div>

          <h3 className="sectionHeading">I am available...</h3>
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
          </div>
          <button
            className="btn btn-block submit"
            type="submit"
            aria-label="Close"
            // style={style.submit}
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
