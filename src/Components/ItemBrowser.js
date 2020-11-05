import React, { Component } from 'react'
import "./ItemBrowser.css"
import { Star, Lock, Target } from "react-feather";
export default class ItemBrowser extends Component {
    render() {
        return (
            <div className="ui-app-card d-flex flex-row mt-2 col-5 mr-5 mt-5 " title="Go to Facebook channel" data-target-href="https://apps.shopify.com/facebook?surface_detail=all&surface_inter_position=1&surface_intra_position=1&surface_type=category">
            <div className="col-ms-3 mr-1">
                <div className="ui-app-card__icon-container  shadow m-1"  style={{backgroundColor: "white",borderRadius : "100px !important"}}>
                    <img className="img-fluid" srcSet="https://apps.shopifycdn.com/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/cb066d6a6de0f6b56593f7dc0ed4321c.jpg?height=144&quality=90&width=144 2x, https://apps.shopifycdn.com/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/cb066d6a6de0f6b56593f7dc0ed4321c.jpg?height=72&quality=90&width=72 1x" className="ui-app-card__icon" height={72} width={72} alt="" src="https://apps.shopifycdn.com/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/cb066d6a6de0f6b56593f7dc0ed4321c.jpg?height=72&quality=90&width=72" />
                </div>
                </div>
            <div className="col-9">
            <a style={{color: "black"}} href="https://apps.shopify.com/facebook?surface_detail=all&surface_inter_position=1&surface_intra_position=1&surface_type=category">
              <h4 className="ui-app-card__name mb-2" style={{fontSize : "1.5rem"}}>Facebook channel</h4>
            </a>
            <div className="ui-app-card__by-line mb-2">
              <div className="ui-app-card__developer-name" style={{fontSize: "1rem"}}>by Shopify</div>
            </div>
            <div className="ui-app-card__details" style={{fontSize: "1em",lineHeight: 1.5,color:"#637381",fontWeight: 400}}>Bring your products to Facebook and Instagram users.</div>
            <div className="d-flex flex-row">
                                    <Star color="orange" fill="orange" height="20px" />
                                    <div className="d-flex flex-row" style={{ marginTop: 5, marginLeft: 5 }}>
                                        <div style={{ marginTop: 1, marginLeft: 1, color: "#637381", fontWeight: 400 }}  >4.6</div>
                                      
                                    </div>
                                <div>
            </div>
            </div>
                  
            <div className="ui-app-card__context">
              <div className="ui-app-card__pricing">
                <div className="ui-app-pricing ui-app-pricing--format-short"  style={{fontSize: "1em",lineHeight: 1.5,color:"#637381",fontWeight: 400}}>Free to install</div>
              </div>
            </div>
            
            </div></div>
        )
    }
}
