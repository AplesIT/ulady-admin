import React, { Component } from 'react'
import { Facebook, Twitter, Linkedin } from "react-feather";
import "./Home.css"
import Navigations from './CustomNavigation';
export default class Footer extends Component {
  render() {
    return (
      <footer className="site-footer mt-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">AIgoHub In recent years, the use of software has expanded in every aspect of our lives, and it has brought about various changes. What you need to do to get the most out of your software. We believe that it is about exposing the data and features that each holds and making them available to each other. The API can be called the "common language of software" necessary for that purpose.
              It is our desire to bring that charm to as many people as possible</p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>MarketPlace</h6>
              <ul className="footer-links">
                <li><a href="#">Machine Learning APIs</a></li>
                <li><a href="#">SMS APIs</a></li>
                <li><a href="#">Email APIs</a></li>
                <li><a href="#">Payment APIs</a></li>
                <li><a href="#">Food APIs</a></li>
                <li><a href="#">Explore All APIs</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Contribute</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright © 2020 All Rights Reserved by
                    <a href="#"> AIgoHub</a>.
                  </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><Facebook /></a></li>
                <li><a className="twitter" href="#"><Twitter /></a></li>
                <li><a className="linkedin" href="#"><Linkedin /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    )
  }
}
