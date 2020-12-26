import React, { Component } from "react";
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
import {DomainHost, EndPointUser} from "../ApiConfig/ConstantApi";
import { requestApi } from '../Actions/RequestApi';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { withRouter } from 'react-router-dom';
import ComponentDate from "./ComponentDate"
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
const default_role="USER";
const formatDate = (date) => {	// formats a JS date to 'yyyy-mm-dd'
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agreement: false,
      sex: "Male",
      date: null,
      selectedDate: '2012-11-15'
    };
  }
  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });

  };
  setDate = (date) => {
    this.setState({ date: date })
  }
  handleFormSubmit = event => {
    let {username,email, password,phone,sex, date= new Date()} = this.state
    if(this.validations())
    {
      let  params ={};
      let {createNotification}= this.props;
      params["username"]=username;
      params["email"]=email;
      params["password"]=password;
      params["phone"]=phone;
 
      params["role"]=default_role;
 
      let url = DomainHost.AIGOHUB+ EndPointUser.Create.url;
      let method = EndPointUser.Create.method;
      requestApi({url, params,method}).then((res)=>{
         if(res.status === 200)
         {
           
            createNotification('success',"Create successfull account","success");
            this.props.funcClick();

         }
         
      }
      ).catch(error => {
           
           createNotification('error',error.message,"Error")
      })
    }

    
  };
  validations =()=>
  {
    let{createNotification} = this.props;
    if(this.state.password !== this.state.repassword) return false;
    if(this.state.agreement===false) {
        createNotification("error","Please agree with our policy!!!","Error");
        return false;
    }
    return true; 
  }
  handleAgreement = event => {
    this.setState({
      [event.target.name]: event.target.checked
    })

  }
  setValueDropDown = (value) => {
    this.setState(
      {
        sex: value
      }
    )
  }
  render() {
    let {username,email, password, repassword, phone } = this.state
    return (

      <div className="form-validation col-lg-4 col-md-6 col-xs-6 shadow ">

        <ValidatorForm className="mt-2 pt-5 pl-5 pr-5 pb-2" onSubmit={this.handleFormSubmit}>
          <h1 className="w-100 text-center">Sign Up</h1>
          <TextValidator
            className="w-100 mt-2"
            variant="outlined"
            label="Username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            validators={["required"]}
            errorMessages={[
              "this field is required",
              "username is not valid"
            ]}
          />
          <TextValidator
            className="w-100 mt-3"
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
            variant="outlined"
            label="Phone"
            type="Phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            validators={["required", "isNumber"]}
            errorMessages={[
              "this field is required",
              "phone is not valid"
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
          <TextValidator
            className="w-100 mt-3"
            label="Retype Password"
            variant="outlined"
            onChange={this.handleChange}
            name="repassword"
            type="password"
            value={repassword}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <div className="d-flex flex-row mt-3 " >
            <ComponentDate setDate={this.setDate} />
            <DropdownButton id="dropdown-basic-button" title={this.state.sex} className="dropdownsex">
              <Dropdown.Item onClick={() => { this.setValueDropDown("Male") }}>Male</Dropdown.Item>
              <Dropdown.Item onClick={() => { this.setValueDropDown("Female") }}>Female</Dropdown.Item>
            </DropdownButton>
          </div>
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
                Sign Up
              </Button>
            </div>
            <span className="mt-2 col-1"></span>
            <Button
              className="col-3"
              variant="contained"
              className="capitalize"
              onClick={() => this.props.funcClick()}
              color="primary">
              Sign in
            </Button>
          </div>
        </ValidatorForm>

        <div className="d-flex flex-row justify-content-center pb-3">
          <p style={{ fontSize: "1.25rem" }}>OR </p>
        </div>
        <div className="d-flex flex-row pb-3 justify-content-center ">
          <FacebookLoginButton className="col-5" style={{ borderRadius: 10 }} />
          <GoogleLoginButton className="col-5" style={{ borderRadius: 10 }} />
        </div>
      </div>

    );
  }
}
export default withRouter(Signup);
