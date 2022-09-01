import React from 'react';

const styles = {
      
      pwStrWeak: {
        display: "inlineBlock",
        position: "relative",
        left: "0",
        padding: "0",
        margin: "0",
        color: "gray",
      },
      
      pwStrStrong: {
        display: "inlineBlock",
        position: "relative",
        left: "77%",
        padding: "0",
        margin:' 0',
        color: "gray",
      }
      
}


const PasswordStr = props => {
  var strColor;
  var strWidth;


  switch (props.score) {
    case 1:
      strColor = 'red';
      strWidth = '20%';
      break;
    case 2:
      strColor = 'orange';
      strWidth = '40%';
      break;
    case 3:
      strColor = 'yellow';
      strWidth = '60%';
      break;
    case 4:
      strColor = '#5cff47';
      strWidth = '80%';
      break;
    case 5:
      strColor = 'green';
      strWidth = '100%';
      break;
    default:
  }
  

  var style = { backgroundColor: strColor, height: '5px', width: strWidth, transition: 'all 300ms ease-in-out' }

  return (
  <div>
    <p style={styles.pwStrWeak}>weak</p>
    <p style={styles.pwStrStrong}>strong</p>
    <div style={style} />
  </div> 
  );

}

export default PasswordStr;