import React, { Component } from "react";
import Slider from "react-slick"; 
import "./simpleslide.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomCard from "./CustomCard";
export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
    render() {
        const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
            <div className="m-4 p-4" style={{position: "relative"}}>
            <h2>Multiple Rows</h2>
            <Slider  ref={c => (this.slider = c)} {...settings}>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
              <CustomCard/>
            </Slider>
            <div style={{ textAlign: "center" }}>
          <button className="button btn-left btn-rough"  onClick={this.previous} >
           
          </button>
          <button className="button btn-right btn-rough" onClick={this.next}>
          </button>
        </div>
          </div>);
      }
    }
