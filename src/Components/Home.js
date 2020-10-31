import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { withRouter } from 'react-router-dom';
import {Facebook,Twitter, Linkedin} from "react-feather";
import "./Home.css"
import Navigations from './CustomNavigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import RowItem from './RowItem';
import Footer from './Footer';
import CustomCard from './CustomCard';
import SimpleSlider from './SimpleSlider';
class Home extends Component {
    render() {
        return (
            <div>
             <Navigations/>
             <div className="w-100 bg-banner shadow">
                <div className="text-sologan">
                Artificial intelligence, Everything you need in One Place
                </div>
                <div className="text-sologan2">
                One SDK. One API key. One dashboard.
                </div>
             </div>

             <RowItem className="m-10"/>
            <SimpleSlider/>


















            <Footer/>
             </div>
            )
    }
}
export default withRouter(Home)
