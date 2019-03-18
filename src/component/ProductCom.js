import React from "react";
import Product from "./Product";
import {ProductConsumer} from "../contaxt.js"

export default class ProductCom extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                   <div className="row text-center">
                      <div className="col-12">
                        <h1 className="mt-4 text-center">Our Products</h1>
                      </div>
                   </div>
                   <div className="container">
                   <div className="row ">
                   <ProductConsumer>
                    {(data) => {
                        return  data.mobilePhoneArray.map(
                            (item) => <Product className="col-6" key= {item.id} itemId={item.id} itemTitle={item.title} itemImg={item.img} itemPrice={item.price} itemCompany={item.company} itemLeft={item.itemLeft} inCart={item.inCart}/>
                        )
                      }
                    }
                   </ProductConsumer>
                   </div>
                   </div>
                </div>
                <footer className="footer">
                    <h6>&copy; Bikram Deka - 2019</h6>
                </footer>
            </React.Fragment> 
        )
    }
}