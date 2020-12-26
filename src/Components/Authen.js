import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Authen.css'
import SignIn from './SignIn';
import Signup from './Signup';
import { withRouter } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../StorageLocal/LocalStorage";
import {isEmpty} from "lodash";
class Authen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true
        }
    }
    createNotification = (type, message = "Info", title = "Title") => {
        switch (type) {
            case 'info':
                NotificationManager.info('Info message');
                break;
            case 'success':

                NotificationManager.success(title, message, 1000);

                break;
            case 'warning':
                NotificationManager.warning(title, message, 2000);
                break;
            case 'error':
                NotificationManager.error(title, message, 2000);
                break;
        };
    };
    componentWillMount() {
        if(!isEmpty(localStorage.getItem(ACCESS_TOKEN)))
        {
            this.props.history.push("/home");
        }
    }
    onClicks = () => {
        this.setState(
            {
                isLogin: !this.state.isLogin
            }
        )
        if (this.state.isLogin) {

        }
    }
    renderComponents = () => {
        return (this.state.isLogin ? <SignIn funcClick={() => this.onClicks()} createNotification={this.createNotification} /> : <Signup funcClick={() => this.onClicks()} createNotification={this.createNotification} />)
    }

    render() {
        return (
            <div className=" row authen justify-content-center">
                <NotificationContainer />
                <img src="/background_logo.png" className="img-fluid col-lg-7 col-md-10 col-xs-10" alt="" />
                {this.renderComponents()}

            </div>
        )
    }
}
export default withRouter(Authen);
