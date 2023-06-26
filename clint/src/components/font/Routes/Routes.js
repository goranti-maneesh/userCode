import React from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import AddEdit from "../Admin/addEdit";

import { Route , Routes as Routess } from "react-router-dom";

const Routes = ({productItems ,cartItems,handlerAddProduct ,handlerRemoveProduct,handlerClerAllItems})  =>{
    return(
        <div>
        
                    <Routess>
                          <Route exact path="/" element={<Products productItems={productItems} handlerAddProduct={handlerAddProduct} />} /> 
                        <Route exact path="/home" element={<Products productItems={productItems} handlerAddProduct={handlerAddProduct} />} /> 
                        <Route exact path="/Cart" element={<Cart cartItems={cartItems} handlerAddProduct={handlerAddProduct} handlerRemoveProduct={handlerRemoveProduct} handlerClerAllItems={handlerClerAllItems} />} /> 
                        <Route exact path="/login" element={<Login/>} />
                        <Route exact path="/Admin" element={<Admin/>} />
                        <Route exact path="/addContact" element={<AddEdit />} />
                        <Route exact path="/update/:id" element={<AddEdit />} />
                    </Routess>

          
        </div>
    )
}


export default Routes;



