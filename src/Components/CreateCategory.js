import { Title } from '@material-ui/icons';
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Col, Row, Input, Button } from 'reactstrap';
import CustomNavigation from './CustomNavigation';
import Footer from './Footer';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import "./CreateCategory.scss"
import { isEmpty } from "lodash"
import { requestApi} from '../Actions/RequestApi';
import { DomainHost, EndPointCategory, EndPointSDK} from "../ApiConfig/ConstantApi"
import { ACCESS_TOKEN } from "../StorageLocal/LocalStorage"
export default class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: "",
        }
    }
    onChangeEditStateChange = (editorState) => {
        editorState = editorState.getCurrentContent().getPlainText()
        this.setState({
            editorState
        });
    }
    createNotification = async (type, mess = "") => {

        switch (type) {
            case 'info':
                NotificationManager.info('Info message');
                break;
            case 'success':
                NotificationManager.success('Success message', 'Create success item', 1000);
                break;
            case 'warning':
                NotificationManager.warning('Warning message', mess, 3000);
                break;
            case 'error':
                NotificationManager.error('Error message', mess, 5000)
                break;
        };
    };
    handleChangeValue = (e) => {
        e.persist();
        this.setState(
            { [e.target.name]: e.target.value }
        )

    }
    onCreatePostCategory = () => {
    
        let warning = "",{name="Category"}=this.props
        if (isEmpty(this.state.editorState)) {
            warning += "Description is emtpy. ";
        }
        if (isEmpty(this.state.title)) {
            warning += "Title is empty"
        }
        if (warning !== "") { this.createNotification("error", warning); return;}
        let params = {
            "name": this.state.title,
            "description": this.state.editorState
        }
        let url = DomainHost.AIGOHUB +  name==="Category"?EndPointCategory.Create.url: EndPointSDK.Create.url;
        let method = EndPointCategory.Create.method;
        let headers = {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) }
        requestApi({url,method, params, headers }).then((res) => {
            this.createNotification("success",res.message);
            
            setTimeout(()=>this.props.history.push("/home"),2000);
        }
        ).catch(e => {
            this.createNotification("error",e.message);
        })
    }
    render() {
        let {name="Category"} =this.props;
        return (
            <div>
                <Button style={{ margin: "1% 2% 10% 0%", float: "right", backgroundColor: "green", fontSize: "20px" }}
                    variant="contained"
                    onClick={this.onCreatePostCategory}>
                    Create
                 </Button>
                <div className="shadow rounded h-100 container-post-category" style={{ minHeight: "200px", padding: "10px" }}>
                    <Row className="post-category" style={{ height: 50 }}>
                        <Col md={2} xs={5} className="header-title-category">
                            <div className="txt-title "> {name}</div>
                        </Col>
                        <Col lg={9} xs={5} className="input-title-category">
                            <Input onChange={this.handleChangeValue} name="title" />
                        </Col>
                    </Row>
                    <Row>

                        <div className="feild-3" style={{ margin: "2px 15px" }}>
                            <div className="title post">
                                <div className="txt-title " style={{ alignContent: "left !important" }}> Description</div>
                            </div>
                            <div className="shadow mt-2 p-2 mb-5" style={{ minHeight: "15rem" }}>
                                <Editor

                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={this.onChangeEditStateChange}

                                />
                            </div>
                            <hr />
                        </div>

                    </Row>
                </div>
 
                <NotificationContainer />
            </div >
        )
    }
}
