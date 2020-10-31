import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Input } from 'semantic-ui-react';
import {User} from "react-feather";
import 'semantic-ui-css/semantic.min.css'
import "./Navigation.css";
import {Button,Menu,MenuItem}  from '@material-ui/core';
export default class CustomNavigation extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      anchorEl : null
    }
  }
  setAnchorEl =(anchorEl)=>
  {
    this.setState(
      {
        anchorEl
      }
    )
  }
  handleClick = (event) => {
    this.setAnchorEl(event.currentTarget);
  };
  handleClose = () => {
    this.setAnchorEl(null);
  };
    render() {
        return (
            <div className="Navigation ">
            <header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Navbar.Brand href="#home">AIgoHub</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#features">Categories</Nav.Link>
                  <Nav.Link href="#pricing">Create organiration</Nav.Link>
                  <Nav.Link href="#pricing">Docs</Nav.Link>
                </Nav>
                <Nav>
                <div className="ui input"  styles={{borderRadius: '10px'}}>
                 <Input icon={{ name: 'search', link: true }} placeholder='Search...' />
                  </div>
                  <Nav.Link href="#deets">Add your Apps</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes"> Themes</Nav.Link>
                  <User style={{ borderRadius: "50%"}} onClick={(e)=>this.handleClick(e)}/>
                </Nav>
                    <Menu
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  keepMounted
                  open={Boolean(this.state.anchorEl)}
                  onClose={(e)=>this.handleClose()}
                  >
                  <MenuItem onClick={(e)=>this.handleClose()}>Profile</MenuItem>
                  <MenuItem onClick={(e)=>this.handleClose()}>My account</MenuItem>
                  <MenuItem onClick={(e)=>this.handleClose()}>Logout</MenuItem>
                  </Menu>
              </Navbar.Collapse>
            </Navbar>
          </header>
          <div className="container">
            

          </div>
          </div>
        )
    }
}