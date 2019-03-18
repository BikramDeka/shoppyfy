import React from "react";
import {Link} from "react-router-dom";
import assuredLogo from "../logo/assured.gif";
import {ProductConsumer} from "../contaxt.js";

export default class Product extends React.Component{
    render(){
        return(
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5" style={{marginLeft:"auto", marginRight:"auto",display:"block"}}>
            <ProductConsumer>
              {value => (
                 <div className="card productCard p-2">
                 <div className="img-container" 
                   onClick={() => {value.handelDetail(this.props.itemId)}}>
                   <div style={{height: 250}} className="pt-2">
                       <Link to="/details">
                          <div className="align-center mb-4 ">
                             <img style={{display: "block", marginLeft:"auto", marginRight:"auto"}}className="img-fluid mobile" src={this.props.itemImg} alt={this.props.itemCompany}/>
                          </div>
                       </Link>
                   </div>
                 </div>
                 <Link to="/details">
                   <h6 style={{fontWeight: 600, color: "#1976D2"}}>{this.props.itemTitle}</h6>
                 </Link>
                 <h6 style={{ marginTop: 10}}>By- {this.props.itemCompany}</h6>
                 <h6 style={{color: "green"}}><i className="fas fa-rupee-sign"></i> {this.props.itemPrice} <img style={{width: 80,marginLeft:10}} src={assuredLogo} alt="assured"></img></h6>
                 <h6 style={{color: "red"}}>{this.props.itemLeft<8? `Hurry! only ${this.props.itemLeft} items left.`: null}</h6>
                 <div style={{position: "absolute", top: 200,right: 10}} >
                 <Link to="/cart">
                   <button className="btn btn-primary cartBtn"
                    onClick={() => value.addToCart(this.props.itemId)}
                    disabled={this.props.inCart? true: false}>
                     {this.props.inCart? "In cart": <i className="fas fa-cart-plus"></i>} 
                   </button>
                  </Link>
                 </div>
               </div>
              )}
            
            </ProductConsumer>
          </div>
        )
    }
}