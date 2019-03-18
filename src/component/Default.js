import React from "react";
import notFound from "../logo/notFound.jpg"

export default class Default extends React.Component{
    render(){
      /* console.log(this.props) */
        return(
            <div className="container">
              <div className="row">
                <img src={notFound} alt="page notfound" className="img-fluid rounded mx-auto m-3"/>
              </div>
              <h4 className="text-center">Sorry!! The requested url{this.props.location.pathname} not found</h4>
            </div>
        )
    }
}