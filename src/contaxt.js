import React from "react";
import MobilePhone from "./data/MobileData";
import DetailedProduct from "./data/DetailedProduct.js";

const ProductContext= React.createContext();

class ProductProvider extends React.Component{
   state={
      mobilePhoneArray: [],
      detailObject: DetailedProduct,
      cart:[]
   }

   componentDidMount(){
      this.setProducts();
   }
   setProducts=() =>{
      let tempProducts=[];
      MobilePhone.forEach(item =>{
         const singleItem = {...item};
         tempProducts=[...tempProducts,singleItem];
      });
      this.setState(()=>{
         return {mobilePhoneArray: tempProducts};
      });
   }

   getItem=(id)=>{
      const product=this.state.mobilePhoneArray.find(item=> item.id===id);
      return product;
   }

   handelDetail= (id) => {
     const product=this.getItem(id);
     this.setState(()=> {return {detailObject: product}})
   }

   addToCart= (id) => {
      let tempProducts=[...this.state.mobilePhoneArray];
      const index=tempProducts.indexOf(this.getItem(id));
      const product = tempProducts[index];
      product.inCart=true;
      product.count= 1;
      const total=product.total;
      product.total=total;
      this.setState(
         ()=>{
            return {mobilePhoneArray: tempProducts, cart:[...this.state.cart, product]}
         },
         ()=>{
           /*  console.log(this.state) */
         }
      )
   }

   increaseQuantity=(id)=>{
      let tempCart=[...this.state.cart]
      /* console.log(tempCart) */
      const index=tempCart.indexOf(this.getItem(id));
      let product=tempCart[index]
      product.count=product.count+1;
      product.total=product.total+product.price2;
      this.setState(
         ()=>{
            return {cart:tempCart}
         },
         ()=>{
            /* console.log(this.state) */
         }
      )
   }

   decreaseQuantity=(id)=>{
      let tempCart=[...this.state.cart]
      /* console.log(tempCart) */
      const index=tempCart.indexOf(this.getItem(id));
      let product=tempCart[index]
      product.count=product.count-1;
      product.total=product.total-product.price2;
      this.setState(
         ()=>{
            return {cart:tempCart}
         },
         ()=>{
            /* console.log(this.state) */
         }
      )
   }

   deleate=(id)=>{
      let tempProducts=[...this.state.mobilePhoneArray];
      let tempCart=[...this.state.cart]
      let index=tempCart.indexOf(this.getItem(id))
      let index2=tempProducts.indexOf(this.getItem(id))
      tempCart.splice(index,1);
      tempProducts[index2].inCart=false;
      tempProducts[index2].total=tempProducts[index2].price2;
      this.setState(
         ()=>{
            return {mobilePhoneArray:tempProducts,cart:tempCart}
         },
         ()=>{
           /*  console.log(this.state) */
         }
      )
   }

   render(){
       return (
           <ProductContext.Provider value={{
              ...this.state,
              handelDetail: this.handelDetail,
              addToCart: this.addToCart,
              increaseQuantity: this.increaseQuantity,
              decreaseQuantity: this.decreaseQuantity,
              deleate: this.deleate
           }}>
           {this.props.children}
           </ProductContext.Provider>
       )
   }
}

const ProductConsumer=  ProductContext.Consumer;

export {ProductProvider, ProductConsumer};