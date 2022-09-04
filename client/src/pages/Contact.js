import React from 'react';

const Contact = () => {
  return (
    <div className="content">
      <section className="about-me">
        <h2>Contact</h2>
        <p className="body-text">
          <ul>
            <div>
              <li id="linkedin">
                <a href="https://www.linkedin.com/in/kmartinezguerrero/">
                  {' '}
                  Visit my LinkedIn!
                </a>{' '}
              </li>
              <li id="github">
                <a href="https://github.com/kmart134"> Visit my GitHub!!</a>{' '}
              </li>
              <li>Email: ksmgps@hotmail.com</li>
              <li>Phone Number: 321-287-8935</li>
            </div>

            <div>
              <li id="linkedin">
                <a href="https://www.linkedin.com/in/mackenziejoyce/">
                  {' '}
                  Add me on LinkedIn
                </a>{' '}
              </li>
              <li id="github">
                <a href="https://github.com/mackenziejoyce"> Checkout my projects on Github</a>{' '}
              </li>
              <li>Email: MackenzieJoyce414@gmail.com</li>
              <li>Phone Number: 321-234-5397</li>
            </div>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default Contact;
