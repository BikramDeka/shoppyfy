import React from "react";
import {Link} from "react-router-dom";
import { ProductConsumer } from "../contaxt.js";
import CartItem from "./CartItem.js";
import emptycart from "../logo/emptycart.png";

export default class Cart extends React.Component {
    render() {
        return (
            <ProductConsumer>
                {(data) => {
                    let allTotal=0;
                    const CartItemArray=data.cart.map(item=> <CartItem cartData={item} cartArray={data.cart} wholeData={data}/>);
                    const totalArray= data.cart.map(item=> item.total);
                    for(let i=0; i<totalArray.length;i++){
                        allTotal=allTotal+totalArray[i];
                    }

                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-3 text-center">
                                    <h1>My Cart ({data.cart.length} {data.cart.length <= 1 ? "item" : "items"})</h1>
                                </div>
                            </div>

                            {data.cart.length === 0 ?
                                <div className="container">
                                    <img src={emptycart} alt="empty cart" className="rounded mx-auto d-block mt-5" />
                                    <h4 className="text-center">Cart is empty</h4>
                                </div>
                                :
                                <div className="row mt-3">
                                    <div className="col-md-7 p-3">
                                        <div className="box p-3" >
                                            <h3 className="m-2">Items</h3>
                                            <hr/>
                                            {CartItemArray}
                                        </div>
                                    </div>
                                    <div className=" col-md-5 mt-sm-3 mb-3">
                                        <div className="box p-3">
                                        <h3>price</h3>
                                        <hr/>
                                        <h6 style={{color: "green"}}>Total price: <i className="fas fa-rupee-sign"></i> {allTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
                                        <hr/>
                                        <Link to="/"><button className="btn btn-primary mr-3 mb-2" style={{background: "orange",border: 0}}>Continue shopping</button></Link>
                                        <button className="btn btn-primary mr-3 mb-2">Place order</button>
                                    </div>
                                    </div>
                                </div>
                            }

                        </div>
                    )

                }}
            </ProductConsumer>
        )
    }
}