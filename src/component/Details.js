import React from  "react";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../contaxt.js";
import assuredLogo from "../logo/assured.gif"

export default class Details extends React.Component{
    render(){
        return(
            <ProductConsumer>
               {data=>{
                  const {title, info, price, inCart, img,img2, itemLeft, company, id} = data.detailObject;
                  return (
                    <div className="container mt-5 mb-5">
                      <div className="row">
                         <div className="col-md-5 imgContainer">
                         <div className="flip-box">
                          <div className="flip-box-inner">
                              <div className="flip-box-front">
                              <img src={img} alt={company} className="img-fluid" style={{width: 250}}/>
                              </div>
                              <div className="flip-box-back">
                              <img src={img2} alt={company} className="img-fluid" style={{width: 250}}/>
                              </div>
                            </div>
                         </div>
                         </div>
                         <div className="col-md-7">
                            <h4 className="mt-5 mt-md-1">{title}</h4> 
                            <h6>By- {company}</h6>
                            <h5 style={{color: "green"}}><i className="fas fa-rupee-sign"></i> {price} <img style={{width: 80,marginLeft:10}} src={assuredLogo} alt="assured"></img></h5>
                            <h6 style={{color: "red"}}>{itemLeft<8? `Hurry! only ${itemLeft} items left.`: null}</h6>
                            <h6 style={{color: "orange", fontWeight: 900}}>Product details</h6>
                            <p>{info}</p>
                            <div className="row">
                            <div className="col-12">
                              <Link to="/cart">
                                <button className="btn btn-primary" disabled={inCart? true:false} onClick={() => data.addToCart(id)}>{inCart? "In Cart":"Add To Cart"}</button>
                              </Link>
                              <Link to="/">
                                <button className="btn btn-primary ml-4" style={{background: "orange",border: 0}}><i className="fas fa-th"></i> Products</button>
                              </Link>
                              </div>
                            </div>
                         </div>
                      </div>
                    </div>
                  )
               }}
            </ProductConsumer>
        )
    }
}