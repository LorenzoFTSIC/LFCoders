import React from 'react';

// import LFCForm from '../components/LFCForm';
// import LTCForm from '../components/LTCForm/LTCForm';

const style = {
  container: {
    maxWidth: '40%',
    margin: '0 auto',
    padding: 40,
    background: '#333',
    color: 'whitesmoke',
    fontSize: 18,
    borderRadius: "12px"

  },

  maintitle: {
    fontSize: 40,
    textAlign: "center",
    color: "white",
    marginTop:"10px",
    marginBottom:"40px"
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight:"bold",
    color: "white",
    marginTop:"10px",
    marginBottom:"40px",
  },

  heading3: {
    fontSize: 25,
    marginTop:"20px"

  },
  
  button: {
    fontSize: 15,
    padding:"10px",
    color: "black",
    fontWeight: 'bold',
    backgroundColor: '#d6d1d1',
    marginLeft:"3px",
    marginBottom:"4px"
  },
  
};

const Search = () => {
  return (
    <div> 
    <h1 className= "maintitle" style={style.maintitle}>SEARCH FOR PROJECTS</h1>
    <div className="searchPage">
      <div style={style.container}>
        <h1 className= "title" style={style.title}>Looking to Code</h1>
      <div>

      <form>
        <h3 className="heading3" style={style.heading3}>What I bring to the table:</h3>
         <div className= "">
         <button className="button favorite styled" style={style.button}
          type="radio">
          Front End
        </button>

        <button className="button favorite styled" style={style.button}
          type="radio">
          Back End
        </button>
        </div>

        <h3 className="heading3" style={style.heading3}>Expected Timeline:</h3>
         <div className= "">
         <button className="button favorite styled" style={style.button}
          type="radio">
          5 Hours
        </button>

        <button className="button favorite styled" style={style.button}
          type="radio">
          20 Hours
        </button>

        <button className="button favorite styled" style={style.button}
          type="radio">
          40+ Hours
        </button>
        </div>

        <h3 className="heading3" style={style.heading3}>I am available...</h3>
         <div className= "">
         <button className="button favorite styled" style={style.button}
          type="button">
          Monday
        </button>

        <button className="button favorite styled" style={style.button}
          type="button">
          Tuesday
        </button>

        <button className="button favorite styled" style={style.button}
          type="radio">
          Wednesday
        </button>

        <button className="button favorite styled" style={style.button}
          type="radio">
          Thursday
        </button>

        <button className="button favorite styled" style={style.button}
          type="radio">
          Friday
        </button>

        <button className="button favorite styled" style={style.button}
          type="radio">
          Saturday
        </button>
        
        <button className="button favorite styled" style={style.button}
          type="radio">
          Sunday
        </button>
        </div>
                        
        <button
        className="btn btn-block btn-info"
        type="submit"
        aria-label="Close"
        >
        Submit
         </button>
    </form>
    </div>
          </div>
        </div>
        </div>
    //   HTML and CSS by AlvaroTrigo on CodePen: TabbyTabs
  );
};

export default Search;