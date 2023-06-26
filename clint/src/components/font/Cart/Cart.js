import React from "react";
import './Cart.css';

const Cart = ({cartItems , handlerAddProduct,handlerRemoveProduct,handlerClerAllItems}) =>{

const totalAmout = cartItems.reduce((price ,item) => price + item.quantity *item.price, 0);

    return(
        <div className="cart-items">
            <center>{cartItems.length >= 1 && <h1>CART ITEMS.</h1>}</center>
           <center> {cartItems.length === 0 && <h3>NO ITEMS ARE ADDED .</h3>} </center>
            <div>
                <div>
                    {cartItems.length >= 1 && <center><button onClick={handlerClerAllItems}>clear all items</button> </center>}
                </div>
                {cartItems.map((item) =>(
                    <div className="item-cart" key={item.id}>
                        <img src={item.imeage} alt={item.imeage} className="addcart-img"/>
                        <p>{item.name}</p>
                        <p>{item.quantity} * {item.price} = { item.quantity * item.price}</p>
                        <div>
                           <button className="cart-item-remove" onClick={ () => handlerRemoveProduct(item)}> - </button>
                            <button className="cart-item-add" onClick={ () => handlerAddProduct(item)}>+ </button>
                             
                        </div>
                    </div>
                ))}
            </div>
           <hr height="10px" />
           <div>
                    {cartItems.length >= 1 && <center> <h2>total : ${totalAmout}</h2></center>}
                    <hr height="10px" /><br/>
                </div>
        </div>
    )
}
export default Cart;