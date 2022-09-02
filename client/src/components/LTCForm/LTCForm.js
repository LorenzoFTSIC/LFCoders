import React from 'react';



// const styles = {
//   nav: {
//     display: 'flex',
//     alignItems: 'flex-end'
//   }
// };

const LTCForm = () => {
    // const handleChange = (event) => {
    //     event.preventDefault();
    //     const { name, value } = event.target;
    // };
  return (
    <div>
      <form>
         LOOKING TO CODE
       <input         
        className="form-input"
        placeholder="Your username"
        name="name"
        type="text"
                          
        // onChange={handleChange}
        />
        <input
                          
        className="form-input"
        placeholder="Your email"
        name="email"
        type="email"
                          
        // onChange={handleChange}
        />
        <input
                         
        className="form-input"
        placeholder="******"
        name="password"
        type="password"
                         
        // onChange={handleChange}
         />
                        
        <button
        className="btn btn-block btn-info"
        type="submit"
        aria-label="Close"
        >
        Submit
         </button>
    </form>
    </div>
  );
}



export default LTCForm;
