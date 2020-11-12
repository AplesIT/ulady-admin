import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './signin.css'
import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  CircularProgress,
  Paper
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agreement: false
    };
  }
  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });

  };
  handleFormSubmit = event => {
    console.log(this.state.agreement)
    if (this.validations()) {
      this.props.history.push("/home");
    }
  };
  validations = () => {
    return true;
  }
  handleAgreement = event => {
    this.setState({
      [event.target.name]: event.target.checked
    })


  }

  render() {
    let { email, password } = this.state
    return (
      <div className="form-validation col-lg-4 col-md-6 col-xs-6 shadow ">

        <ValidatorForm className="mt-2 p-5" onSubmit={this.handleFormSubmit.bind(this)}>
          <h1 className="w-100 text-center">Sign In</h1>
          <TextValidator
            className="w-100 mt-2"
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            validators={["required", "isEmail"]}
            errorMessages={[
              "this field is required",
              "email is not valid"
            ]}
          />
          <TextValidator
            className="w-100 mt-3"
            label="Password"
            variant="outlined"
            onChange={this.handleChange}
            name="password"
            type="password"
            value={password}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />

          <FormControlLabel
            className="mt-3"
            control={<Checkbox checked={this.state.agreement} onChange={this.handleAgreement} name="agreement" />}
            label="I have read and agree to the terms of service."
          />
          <div className="d-flex justify-content-center items-center mb-4 row">
            <div className="col-4">
              <Button
                variant="contained"
                color="primary"
                type="submit">
                Sign in
                    </Button>
            </div>
            <span className="mt-2 col-1"></span>
            <Button
              className="col-3"
              variant="contained"
              className="capitalize"
              onClick={() => this.props.funcClick()}
              color="primary">
              Sign up
                  </Button>
          </div>
        </ValidatorForm>
      </div>

    )
  }
}
export default withRouter(SignIn);
