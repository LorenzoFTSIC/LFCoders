import React from 'react';
import Button from '@mui/material/Button';

// import LFCForm from '../components/LFCForm';
// import LTCForm from '../components/LTCForm/LTCForm';

const style = {
  // container: {
  //   maxWidth: '40%',
  //   margin: '0 auto',
  //   padding: 40,
  //   background: '#333',
  //   color: 'whitesmoke',
  //   fontSize: 18,
  //   borderRadius: '12px'
  // },
  // maintitle: {
  //   fontSize: 40,
  //   textAlign: 'center',
  //   color: 'white',
  //   marginTop: '10px',
  //   marginBottom: '40px'
  // },
  // title: {
  //   fontSize: 30,
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   color: 'white',
  //   marginTop: '10px',
  //   marginBottom: '40px'
  // },
  // heading3: {
  //   fontSize: 25,
  //   marginTop: '20px'
  // },
  // button: {
  //   fontSize: 15,
  //   padding: '10px',
  //   color: 'black',
  //   fontWeight: 'bold',
  //   backgroundColor: '#d6d1d1',
  //   marginLeft: '3px',
  //   marginBottom: '4px'
  // }
  Button: {
    margin: '1%',
    padding: '1%',
    background: 'rgba(255, 255, 255, 0.11)',
    color: 'whitesmoke',
    border: '2px solid purple'
  },
  submit: { 
    color: 'whitesmoke',
    border: '2px solid lightblue',
    margin: '1% 0'
  }
  // 'Button:hover': {
  //   background: 'rgba(255, 161, 253, 0.3)',
  //   boxShadow: '0px 0px 8px rgb(161, 161, 161)'
  // }
  // '&:active': {
  //   boxShadow: 'none',
  //   backgroundColor: '#0062cc',
  //   borderColor: '#005cbf'
  // },
  // '&:focus': {
  //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
  // }
};

const Search = () => {
  return (
    <div className="modalPage">

      <div className="modalContainer">
        {/* <div style={style.container}>
        <h1 className= "title" style={style.title}></h1>
      <div> */}
      <h3 className="mainTitle">LOOKING TO CODE</h3>
        <form>
          <h3 className="sectionHeading">What I bring to the table:</h3>
          <div className="buttonContainer">
            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="radio"
            >
              Front End
            </Button>

            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="radio"
            >
              Back End
            </Button>
          </div>

          <h3 className="sectionHeading">Expected Timeline:</h3>
          <div className="buttonContainer">
            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="radio"
            >
              5 Hours
            </Button>

            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="radio"
            >
              20 Hours
            </Button>

            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="radio"
            >
              40+ Hours
            </Button>
          </div>

          <h3 className="sectionHeading">I am available...</h3>
          <div className="buttonContainer">
            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="button"
            >
              Monday
            </Button>

            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="button"
            >
              Tuesday
            </Button>

            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="radio"
            >
              Wednesday
            </Button>

            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="radio"
            >
              Thursday
            </Button>

            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="radio"
            >
              Friday
            </Button>

            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="radio"
            >
              Saturday
            </Button>

            <Button
              // className="formOptionButton"
              // ^ button favorite styled
              style={style.Button}
              variant="outlined"
              size="medium"
              type="radio"
            >
              Sunday
            </Button>
          </div>


        </form>
        <button
            className="btn btn-block"
            type="submit"
            aria-label="Close"
            style={style.submit}
          >
            Submit
          </button>
      </div>
    </div>
    // </div>
    // </div>
    //   HTML and CSS by AlvaroTrigo on CodePen: TabbyTabs
  );
};

export default Search;
