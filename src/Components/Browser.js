import React, { Component } from 'react'
import CustomNavigation from './CustomNavigation'
import Footer from './Footer'
import "./Browser.css"
import CustomCheckBox from './CustomCheckBox';
export default class Browser extends Component {
     RotateArrow =(event)=>
     {
         var node =event.target;
         console.log(node.style.transform);
         if(node.style.transform =="" || node.style.transform=="rotate(0deg)")
         node.style.transform ='rotate(180deg)'
         else node.style.transform ='rotate(0deg)'
         //alert("test");
     }

    render() {
        return (
            <div>
                <CustomNavigation/>
                 <div className="d-flex row" style={{margin: "50px 50px"}}>
                     <div className="col-3 bg-light d-flex flex-column" style={{ borderRadius: 5, minHeight: 1000}}>
                        <CustomCheckBox children="Check only compatiable apps" style={{margin: 10}}/>
                        <hr style={{margin: "20px 2px 0px 2px"}}/>
                        <div className="d-flex flex-row w-100 " style={{position: "relative",padding: "1px 1px 0px 1px "}}>
                            <CustomCheckBox children="All"/>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row " style={{position: "relative" ,padding:"1px 1px 0px 1px"}}>
                                <CustomCheckBox children="Store Design" />
                                <img className="img-fluid arrow-icon" src="/arrowUp.png" style={{width: "5%",height: "20%",position: "absolute !important", right: "10px"}} onClick={(e)=>this.RotateArrow(e)}/>
                            </div>
                            <div className="d-flex flex-row " style={{position: "relative" ,padding:"1px 1px 0px 1px"}}>
                                <CustomCheckBox children="Store Design" style={{ marginLeft: "20px"}} />
                                 
                            </div>

                        </div>
                    </div>  
                 </div>
                <Footer className="footer"/>
            </div>
        )
    }
}

