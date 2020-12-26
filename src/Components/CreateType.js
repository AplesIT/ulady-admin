import { Title } from '@material-ui/icons';
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Input } from 'reactstrap';
import CustomNavigation from './CustomNavigation';
import Footer from './Footer';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import "./CreateCategory.scss"
import { isEmpty } from "lodash"
import { requestApi } from '../Actions/RequestApi';
import { DomainHost, EndPointCategory } from "../ApiConfig/ConstantApi"
import { ACCESS_TOKEN } from "../StorageLocal/LocalStorage"
import CreateCategory from './CreateCategory';
export default class CreateType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1",
        }
    }
    setActiveTab = (activeTab) => {
        this.setState(
            {
                activeTab
            }
        )
    }
    render() {
        let { activeTab } = this.state;
        return (
            <div>
                <CustomNavigation />
                <div className="shadow rounded" style={{ margin: "5% 10%", padding: "10px" }}>
                    <Nav tabs className="mt-3" >
                        <NavItem>
                            <NavLink
                                className={activeTab === "1" ? "active" : ""}
                                onClick={() => { this.setActiveTab("1") }}
                            >
                                Category
          </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === "2" ? "active" : ""}
                                onClick={() => { this.setActiveTab("2") }}
                            >
                                Type SDK
          </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <CreateCategory name="Category" />
                        </TabPane>
                        <TabPane tabId="2">
                            <CreateCategory name="Type SDK" />
                        </TabPane>
                    </TabContent>
                </div>
                <Footer />
            </div>
        )
    }
}
