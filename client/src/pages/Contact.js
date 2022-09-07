import React from 'react';

const styles = {
  box: {
    display: 'flex',
    margin: '20px',
    paddingTop: '25px',
    marginBottom: '200px'
    
  },
  collabBox:{
    marginLeft:'80px'
  },

  title:{
    marginTop: '100px',
    textDecoration: "underline",
  }
};

const Contact = () => {
  return (
    <div className="content">
      <section className="about-me">
        <h1 className= "title" style={styles.title}>Contact Us</h1>
        <p className="body-text">
          <ul style={styles.box} className="box">
            <div style={styles.collabBox} className="collabBox">
              <h4>Karen Martinez</h4>
              <li id="linkedin">
                <a href="https://www.linkedin.com/in/kmartinezguerrero/">
                  {' '}
                  Visit my LinkedIn!
                </a>{' '}
              </li>
              <li id="github">
                <a href="https://github.com/kmart134"> Visit my GitHub!</a>{' '}
              </li>
              <li>ksmgps@hotmail.com</li>
              <li>321-287-8935</li>
            </div>

            <div style={styles.collabBox} className="collabBox">
            <h4>Mackenzie Joyce</h4>
              <li id="linkedin">
                <a href="https://www.linkedin.com/in/mackenziejoyce/">
                  {' '}
                  Add me on LinkedIn
                </a>{' '}
              </li>
              <li id="github">
                <a href="https://github.com/mackenziejoyce"> Visit my GitHub!</a>{' '}
              </li>
              <li>MackenzieJoyce414@gmail.com</li>
              <li>321-234-5397</li>
            </div>

            <div style={styles.collabBox} className="collabBox">
            <h4>Lorenzo Ferri</h4>
              <li id="linkedin">
                <a href="lorenzo">
                  {' '}
                  Add me on LinkedIn
                </a>{' '}
              </li>
              <li id="github">
                <a href="https://github.com/LorenzoFTSIC"> Checkout my projects on Github</a>{' '}
              </li>
              <li>Email: lorenzo</li>
              <li>Phone Number:lorenzo </li>
            </div>

            <div style={styles.collabBox} className="collabBox">
            <h4>Khaled Ghanem</h4>
              <li id="linkedin">
                <a href="https://www.linkedin.com/in/ghanemk/">
                  {' '}
                  Add me on LinkedIn
                </a>{' '}
              </li>
              <li id="github">
                <a href="https://github.com/khaledghanem1"> Checkout my projects on Github</a>{' '}
              </li>
              <li>khaledghanim96@gmail.com</li>
              <li>313-266-4807</li>
            </div>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default Contact;
