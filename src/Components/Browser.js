import React, { Component } from 'react'
import CustomNavigation from './CustomNavigation'
import Footer from './Footer'
import "./Browser.css"
import CustomCheckBox from './CustomCheckBox';
import ItemBrowser from './ItemBrowser';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
export default class Browser extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            isShow:false,
            wobble: 0
        }
    }
    setWobble=(value)=>
    {
        this.setState(
            {
                wobble: value
            }
        )
    }
     RotateArrow =(event)=>

     {
         var node =event.target;
         console.log(node.style.transform);
         if(node.style.transform =="" || node.style.transform=="rotate(0deg)")
         node.style.transform ='rotate(180deg)'
         else node.style.transform ='rotate(0deg)'
         this.setState(
             {
                 isShow:!this.state.isShow
             }
         )
         this.setWobble(1);

         //alert("test");
     }

    render() {
        const sortList =[
            { title: 'Most Relative '},
  { title: 'Most Install'},
  {title: "Newest"}]
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
                                <img onAnimationEnd={() => this.setWobble(0)} wobble={this.state.wobble} className="img-fluid arrow-icon" src="/arrowUp.png" style={{width: "5%",height: "20%",position: "absolute !important", right: "10px"}} onClick={(e)=>this.RotateArrow(e)}/>
                            </div>
                            {this.state.isShow?
                        <div className="d-flex flex-column">
                                <div className="d-flex flex-row " style={{position: "relative" ,padding:"1px 1px 0px 1px", marginLeft: "40%"}}>
                                    <CustomCheckBox children="Store Design"  />
                                </div>
                                <div className="d-flex flex-row " style={{position: "relative" ,padding:"1px 1px 0px 1px", marginLeft: "40%"}}>
                                    <CustomCheckBox children="Store Design"  />
                                </div>
                                <div className="d-flex flex-row " style={{position: "relative" ,padding:"1px 1px 0px 1px", marginLeft: "40%"}}>
                                    <CustomCheckBox children="Store Design"  />
                                </div>
                                <div className="d-flex flex-row " style={{position: "relative" ,padding:"1px 1px 0px 1px", marginLeft: "40%"}}>
                                    <CustomCheckBox children="Store Design"  />
                                </div>
                        </div>
                        :<div/>}
                        </div>
                          
                    </div>  
                    <div className="col-8 d-flex flex-column" style={{padding: 20}}>
                            <div className="d-flex flex-row " style={{width: "100%", height: "5rem",position:"relative"}}> 
                                <p className="mt-4 ml-2" style={{color:"#637381"}}> 1 - 24 of 5084 results</p>
                                 <Autocomplete
                                    id="combo-box-demo"
                                    options={sortList}
                                    className="autoSort"
                                    getOptionLabel={(option) => option.title}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Sortby" variant="outlined" />}
                                    />
                            </div>
                            <div className="d-flex flex-row mt-2 row">
                                <ItemBrowser/>
                                <ItemBrowser/>
                                <ItemBrowser/>

                                
                            </div>

                    </div>
                 
                 </div>
                <Footer className="footer"/>
        "    </div>
        )
    }
}

