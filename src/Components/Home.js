import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { withRouter } from 'react-router-dom';
import {Facebook,Twitter, Linkedin} from "react-feather";
import "./Home.css"
import Navigations from './CustomNavigation';
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends Component {
    render() {
        return (
            <div>
             <Navigations/>
             <div className="w-100 bg-banner shadow-lg">
                <div className="text-sologan">
                Artificial intelligence, Everything you need in One Place
                </div>
                <div className="text-sologan2">
                One SDK. One API key. One dashboard.
                </div>
             </div>

             <div className="row">
                 <div className="col-3"></div>
                 <div className="col-3"></div>
                 <div className="col-3"></div>
                 <div className="col-3"></div>
             </div>

    <footer className="site-footer mt-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="#">C</a></li>
                <li><a href="#">UI Design</a></li>
                <li><a href="#">PHP</a></li>
                <li><a href="#">Java</a></li>
                <li><a href="#">Android</a></li>
                <li><a href="#">Templates</a></li>
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
                <a href="#"> UladyAI</a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><Facebook/></a></li>
                <li><a className="twitter" href="#"><Twitter/></a></li>
                <li><a className="linkedin" href="#"><Linkedin/></a></li>   
              </ul>
            </div>
          </div>
        </div>
      </footer>
             </div>
            )
    }
}
export default withRouter(Home)
