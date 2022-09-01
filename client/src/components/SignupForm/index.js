import React from "react";
import Button from '@mui/material/Button';
//import RaisedButton from "material-ui/RaisedButton";
import TextField from '@mui/material/TextField';
import PasswordStr from "./PasswordString";
//import "./style.css";

const styles = {
    form: {
        width: "100%"
      },
      loginBox: {
        width: "50%",
        textAlign: "center",
        position: "relative",
        left: "50%",
        transform: "translate(-50%, 20%)",
        padding: "20px",
        backgroundColor: "white",
        boxShadow: "0 0 20px 2px rgba(0, 0, 0, 0.4)",
      },
      
      signUpSubmit: {
        margin: "25px 0 15px 0",
      },
      
      pwStrRow: {
        width: "63%",
        textAlign: "left",
        margin: "auto",
        padding: "0",
        fontSize: "12px",
      },
      
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
      },

      textBox: {
        width: "75%",
        textAlign: "center", 
        marginBottom: "20px",
      }
      
}

const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange
}) => {
  return (
    <div style={styles.loginBox}>
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form style={styles.form} onSubmit={onSubmit}>
        <TextField
        style={styles.textBox}
          name="username"
          label="user name"
          value={user.username}
          onChange={onChange}
          errorText={errors.username}
          id="standard-basic" variant="standard" required
        />
        <TextField
        style={styles.textBox}
          name="email"
          label="email"
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
          id="standard-basic" variant="standard" required
        />
        <TextField
        style={styles.textBox}
          type={type}
          name="password"
          label="password"
          value={user.password}
          onChange={onPwChange}
          errorText={errors.password}
          id="standard-basic" variant="standard" required
        />

        <div style={styles.pwStrRow}>
          {score >= 1 && (
            <div>
              <PasswordStr score={score} /> 
              <Button 
              variant="contained"
                className="pwShowHideBtn" 
                label={btnTxt} onClick={pwMask} 
                style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} 
              >Hide</Button>
            </div>
            )} 
        </div>
        <TextField
        style={styles.textBox}
          type={type}
          name="pwconfirm"
          label="confirm password"
          value={user.pwconfirm}
          onChange={onChange}
          errorText={errors.pwconfirm}
          id="standard-basic" variant="standard" required
        />
        <br />
        <Button
        variant="contained"
         style={styles.signUpSubmit}
          primary={true}
          type="submit"
          label="submit"
        >Submit</Button>
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
