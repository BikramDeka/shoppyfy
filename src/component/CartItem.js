import React from "react";
import assuredLogo from "../logo/assured.gif"

export default class CartItem extends React.Component{
    render(){
        return(
            this.props.cartArray.length===0? 
            null
            : 
            <div className="contaioner">
               <div className="row">
                  <div className="col-md-3 p-2 mb-dm-4">
                     <img src={this.props.cartData.img} alt="mobile" className="img-fluid rounded mx-auto d-block mb-4" style={{width:60}}/>
                  </div>
                  <div className="col-md-9">
                     <h5>{this.props.cartData.title}</h5>
                     <h6 style={{color: "green"}}><i className="fas fa-rupee-sign"></i> {this.props.cartData.price} <img style={{width: 80,marginLeft:10}} src={assuredLogo} alt="assured"></img></h6>
                     <h6 style={{display: "inline-block"}}>Number of items </h6>
                     <button className="ml-2 quantityChangingBtn" disabled={this.props.cartData.count===1? true: false} onClick={()=> this.props.wholeData.decreaseQuantity(this.props.cartData.id)}>-</button>
                     <h6 className="ml-2" style={{display: "inline-block"}}>{this.props.cartData.count}</h6>
                     <button className="ml-2 quantityChangingBtn" onClick={()=> this.props.wholeData.increaseQuantity(this.props.cartData.id)}>+</button>
                     <button type="button" className="btn btn-link p-0" style={{display: "block", color:"red"}} onClick={()=> this.props.wholeData.deleate(this.props.cartData.id)}><i className="fas fa-trash"></i> item</button>
                  </div>
               </div>
               <hr/>
            </div>
        )
    }
}