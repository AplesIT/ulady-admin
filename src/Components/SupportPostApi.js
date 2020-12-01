import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ReactPlayer from "react-player";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import ImageUploader from 'react-images-upload';
import CustomNavigation from './CustomNavigation';
import Footer from './Footer';
const colourOptions = (index) => {
    let arr = []
    for (let i = 1; i <= index; i++) {
        arr.push({ value: `San pham ${i}`, label: `San pham ${i}` });
    }
    return arr;
}

export default class SupportPostApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            pictures: [],
            renderPictures: [],
            indexRenderPicture: 0,
            description: "",
            videoURL: "",
            backupUrl: "",
        }



    }
    componentWillMount() {
        this.document = window.document;
    }
    renderRowImage = (item, index) => {

        return (
            <div>
                <div style={{ fontWeight: "bold", fontSize: "20px" }} >Sản phẩm thứ {index + 1}</div>
                <div className="row-item d-flex flex-row row mt-3 mb-2">
                    {
                        item.pictures.map((picture) => {

                            return (<div className="col-2 m-2">
                                <img className="img-fluid" style={{ width: "100%", height: "100px" }} src={picture} />
                            </div>)
                        }
                        )
                    }
                </div>
                <div style={{ fontWeight: "bold", fontSize: "15px", marginBottom: 5 }} >Mô tả </div>
                <div style={{ fontSize: "15px" }} >{item.description}</div>
                <hr />
            </div>
        )
    }

    setModal = (modal) => {
        this.setState({ modal })
    }
    setPictures = (pictures) => { this.setState({ pictures }) }
    changeImage = (picture) => {
        var temp = this.state.pictures.concat(picture);
        this.setPictures(temp);

    }
    setDescription = (description) => {
        this.setState({ description })
    }
    toggle = () => this.setModal(!this.state.modal);
    /*getImageFromContainer= new Promise((resolve,reject)=>
    {
         
       var node =this.document.getElementById("imageuploader")
       if(node!==null)
       {        
           var images=node.getElementsByClassName("uploadPicture");
            var result=[]
            for(let item in images)
            {
                console.log(item.src);
                result.push(item.src);
            }
        resolve(result);
        }
        else {
            reject("Error");
        }
         
    })*/
    setChangeUrl = (videoURL) => {
        if (videoURL === "") return;
        this.setState(
            {
                videoURL
            }
        )
    }
    postImage = () => {
        if (this.state.pictures === [] || this.state.description === "") return;
        var node = document.getElementById("imageuploader")
        var result = []
        if (node !== null) {
            var images = node.getElementsByClassName("uploadPicture");

            for (let i = 0; i < images.length; i++) {
                var item = images[i]
                result.push(item.src);
            }
        }
        let { indexRenderPicture, renderPictures = [] } = this.state;
        console.log(result);
        renderPictures.push(
            {
                index: indexRenderPicture++,
                pictures: result,
                description: this.state.description,
            }
        )
        this.setState(
            {
                renderPictures,
                pictures: [],
                description: "",
            }
        )
        console.log(this.state.renderPictures);
        this.toggle();




    }
    createNotification = async (type) => {

        switch (type) {
            case 'info':
                NotificationManager.info('Info message');
                break;
            case 'success':

                NotificationManager.success('Success message', 'Create success item', 1000);
                //await sleep(1000);
                //props.history.push("/detail")
                break;
            case 'warning':
                NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                break;
            case 'error':
                NotificationManager.error('Error message', 'Click me!', 5000, () => {
                    alert('callback');
                });
                break;
        };
    };
    /*this.props.history.push({
    pathname: '/template',
     search: '?query=abc',
     state: { detail: response.data }
    }) */
    render() {
        let { modal } = this.state;
        return (
            <div>

                <CustomNavigation />
                <Button style={{ margin: "1% 2% 0% 0%", float: "right", backgroundColor: "green", fontSize: "20px" }}
                    variant="contained"
                    onClick={() => this.createNotification("success")}>
                       Create
            </Button>
                <div className="container-post-api border rounded shadow h-100 p-5" style={{ margin: "5% 10% 5% 10%" }}>
                    <div className="d-flex flex-column">
                        <div className="feild-1">
                            <div className="title post">
                                <h2>Chọn loại sản phẩm  </h2>
                            </div>
                            {[1, 2, 3, 4].map((index) => {
                                return (
                                    <div>
                                        <div className="drop-down1 d-flex flex-row row m-3">
                                            <div className="col-lg-2 col-md-3 col-sm-12 align-middle mt-2" style={{ fontWeight: "bold", fontSize: "15px", color: "grey" }}> {`Danh muc ${index} `} </div>
                                            <div className="col-lg-6 col-md-6 col-sm-7">
                                                <CreatableSelect

                                                    isClearable
                                                    theme={(theme) => ({
                                                        ...theme,
                                                        colors: {
                                                            ...theme.colors,
                                                            neutral0: "#dee2e6"
                                                        },
                                                    })}
                                                    options={colourOptions(5)}
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })}

                        </div>
                        <div className="feild-2">
                            <div className="title post">
                                <h2> Chọn thị trường </h2>
                            </div>
                            {[1, 2].map((index) => {
                                return (
                                    <div>
                                        <div className="drop-down1 d-flex flex-row row m-3">
                                            <div className="col-lg-2 col-md-3 col-sm-12 align-middle mt-2" style={{ fontWeight: "bold", fontSize: "15px", color: "grey" }}> {`Danh muc ${index} `} </div>
                                            <div className="col-lg-6 col-md-6 col-sm-7">
                                                <CreatableSelect

                                                    isClearable
                                                    theme={(theme) => ({
                                                        ...theme,
                                                        colors: {
                                                            ...theme.colors,
                                                            neutral0: "#dee2e6"
                                                        },
                                                    })}
                                                    options={colourOptions(5)}
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })}

                        </div>
                        <div className="feild-3">
                            <div className="title post">
                                <h2> Chỉnh sửa SEO</h2>
                            </div>
                            <div className="shadow mt-2 p-2 mb-5" style={{ minHeight: "20rem" }}>
                                <Editor

                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"

                                />
                            </div>
                            <hr />
                        </div>
                        <div className="feild-4">
                            <div className="title post mb-4">
                                <h2> Upload Image</h2>
                            </div>
                            {this.state.renderPictures.map((item, index) =>
                                (this.renderRowImage(item, index))
                            )}
                            <img onClick={this.toggle} src="/upload.png" className="img-fluid mt-4" style={{ width: "10%", height: "10%", marginLeft: "43%" }} />
                            <Modal isOpen={modal} toggle={this.toggle} >
                                <ModalHeader toggle={this.toggle}>Upload Image</ModalHeader>
                                <ModalBody>
                                    <div className="container-upload">
                                        <div className="row-uploadImage" id="imageuploader">
                                            <div style={{ fontWeight: "bold", fontSize: "20px" }} >Choose your images </div>
                                            <ImageUploader
                                                withIcon={true}

                                                buttonText='Choose images'
                                                onChange={(picture) => this.changeImage(picture)}
                                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                maxFileSize={5242880}
                                                withPreview={true}
                                            />
                                        </div>
                                        <div className="row-desctiptionImage mt-3 ">
                                            <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }} >Description </div>
                                            <Input
                                                type="text"
                                                name="password"
                                                id="examplePassword"
                                                placeholder="Input some things"
                                                onChange={(e) => this.setDescription(e.target.value)}
                                            />

                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.postImage}>Add Image</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                            <hr />
                        </div>
                        <div className="feild-5">
                            <div className="title post mb-4">
                                <h2> Upload Video Via URL</h2>
                                <div className="d-flex flex-row row">
                                    <div className="col-lg-2 col-md-3 col-sm-12 align-middle mt-2" style={{ fontWeight: "bold", fontSize: "15px", color: "grey" }}> Nhập url video </div>
                                    <div className="col-lg-6 col-md-6 col-sm-7 mt-1">
                                        <Input
                                            type="text"
                                            name="password"
                                            id="examplePassword"
                                            placeholder="Input some things"
                                            onKeyDown
                                            onChange={(e) => this.setState({ backupUrl: e.target.value })}
                                        />
                                    </div>
                                    <Button className="col-lg-2 col-md-2 col-sm-2 m-1" style={{ backgroundColor: "green" }} onClick={() => { this.setChangeUrl(this.state.backupUrl) }} > Get video </Button>
                                </div>
                                <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
                                    {this.state.videoURL !== "" ?
                                        <ReactPlayer width="80%" height="25rem"
                                            style={{ margin: "5% 30% 10% 8%", borderRadius: "10px" }}
                                            url={this.state.videoURL}
                                            onError={() => { this.setChangeUrl("") }} /> :
                                        <div className='shadow-lg'  ></div>}
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

                <Footer />
                <NotificationContainer />
            </div>
        )
    }
}
