import React from "react";
import './product.css';

const Products = ({productItems ,handlerAddProduct}) =>{




    return(
        <div className="container"> 
        <div className="main-slider-conatainer" >
              <h1 className="slider-heading">Books Are Magical Keys To Open Up Worlds And Change Perspectives </h1>
              <div>
                <button className="view-more-button">view More</button>
              </div>
        </div>
        <div className="product-cart"> 
                {productItems.map((productItem) =>(
                    <div className="product" key={productItem.id}>
                        <img src={productItem.imeage} alt={productItem.name} className="cart-img"/>
                        <p className="cart-heading">{productItem.name}</p>
                        <p className="cart-price">${productItem.price}</p>
                        <center><button className="cart-button" onClick={ ()=>handlerAddProduct(productItem)}>Add card</button></center>
                    </div>
                ))}
        </div>
        </div>
        
    )
} 

export default Products;