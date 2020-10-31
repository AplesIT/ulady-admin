import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./RowItem.css"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default class RowItem extends Component {
    constructor(props)
{ super(props);
    this.state = {
    loading: false,
    data: [],
    headline: []
  };
}

  componentDidMount() {
    this.setState({ loading: true });
    console.log("app mounted");
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5"
    )
      .then(data => data.json())
      .then(data =>
        this.setState({ data: data.articles, loading: false }, () =>
          console.log(data.articles)
        )
      );
  }

  render() {
    return (
 
        <div className="about container" style={{marginTop: 20}}>
          <h1 className="text-left">
            <b>Latest News</b>
          </h1>
          {this.state.loading ? (
            "loading..."
          ) : (
            <div>
              <Carousel responsive={responsive} className="cus-Carousel w-100 m-4">
                {this.state.data.map((post, indx) => {
                  return (
                     <div className="border w-80 p-10 shadow" style={{borderRadius: 20, marginRight: "10px !important"}}>
                         <img className="img-fluid" style={{borderRadius: "20px 20px 0px 0px " }} src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"></img>
                         <p className="text-center" style={{margin: 10,fontSize: "1.5em",fontWeight:"bold"}}>Test Image AI</p> 
                     </div>
                  );
                })}
              </Carousel>
            </div>
          )}
        </div>
    );
  }
}
