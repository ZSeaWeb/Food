import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { Link } from "react-router-dom";
import {Divider} from "@material-ui/core";
const axios = require('axios').default;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      validatePassword: "",
      passwordDifferent: false,
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      userType: "customer",
      registerFailed: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.retypePassword = this.retypePassword.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  handleChange(content) {
    this.setState(content);
  }

  retypePassword(event) {
    this.setState({validatePassword: event.target.value});
    if (event.target.value === this.state.password) {
        this.setState({passwordDifferent: false});
    } else {
        this.setState({passwordDifferent: true});
    }
  }

  registerUser(event) {
    if (this.state.passwordDifferent) {
      this.setState({registerFailed: "Please correct the error"});
      return
    } else {
      this.setState({registerFailed: ""});
      event.preventDefault();
      axios.post("/api/" + this.state.userType + "/register", {
        userName: this.state.userName,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      }).then(
          response => {
              this.props.changeUser(response.data, "login");
          }
      ).catch(err => {
              console.log(err);
              this.setState({registerFailed: err.response.data});
          }
      );
    }
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={"auto"}>
          <div className="container">

            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Typography variant="body1" color="error">
              {this.state.registerFailed}
            </Typography>
            <form onSubmit={this.registerUser}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="UserName"
                type="text"
                value={this.state.userName}
                autoFocus
                onChange={event => this.handleChange({userName: event.target.value})}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={this.state.password}
                onChange={event => this.handleChange({password: event.target.value})}
              />
              <Typography variant="body2" color="error">
                {this.state.passwordDifferent ? <i>Password doesn't match</i> : null}
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Re-enter your password"
                type="password"
                value={this.state.validatePassword}
                onChange={event => this.retypePassword(event)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Phone Number"
                type="text"
                value={this.state.phoneNumber}
                onChange={event => this.handleChange({phoneNumber: event.target.value})}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Address"
                type="text"
                value={this.state.address}
                onChange={event => this.handleChange({address: event.target.value})}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="City"
                type="text"
                value={this.state.city}
                onChange={event => this.handleChange({city: event.target.value})}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="State"
                type="text"
                value={this.state.state}
                onChange={event => this.handleChange({state: event.target.value})}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Zip Code"
                type="text"
                value={this.state.zip}
                onChange={event => this.handleChange({zip: event.target.value})}
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">Register as a </FormLabel>
                <RadioGroup row aria-label="UserType" name="userType" value={this.state.userType} onChange={event => this.handleChange({userType: event.target.value})}>
                  <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                  <FormControlLabel value="driver" control={<Radio />} label="Driver" />
                  <FormControlLabel value="restaurant" control={<Radio />} label="Restaurant" />
                </RadioGroup>
              </FormControl>
              <br/>
              <br/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Create your account
              </Button>
              <Divider></Divider>
              <br/>
              <Link to={"/home"} className={"link"}>
                Don't want to sign in or sign up? GUEST BROWSING MODE
              </Link>
              <br/>

              <Link to={"/login"} className="link">
                <h3>Have an account? Sign In</h3>
              </Link>
              <h4>Disclaimer: The Site cannot and does not contain any advice. The information is provided for general
                informational and educational purposes only and is not a substitute for professional advice.</h4>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Register;