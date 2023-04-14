import React, { useEffect } from "react";
import { fetchCartProduct, removeFromCart } from "../../../Redux/Cart/cart";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";

function Product() {
  const dispatch = useDispatch();
  const product = useSelector((cart) => cart.cart.products);
  const userData = useSelector((state) => state.user.data);

  const token = userData?.data?.access

  useEffect(() => {
    dispatch(fetchCartProduct(token));
  }, [token, dispatch]);
  
  const RemovePackage = (id) => {
    const tok = userData?.data?.access
    dispatch(removeFromCart(id, tok));
  } 

  return (
    <>
        <div className="item-container" key={product.id}>
        <div className="left">
        <div className="item-img">
           <img
             src={product?.package?.image}
             alt={product?.package?.title}
           />
         </div>
         <div className="item-name">
           <h6>{product?.package?.title}</h6>
           <p>Date : 12 Jan 2023 to 25 - Jan 2023</p>
         </div>
        </div>
       <div className="price-details">
         <div className="amount">
           <span className="amount-inr"><small>₹</small> {product?.package?.price}</span>
         </div>
         <div className="delete" onClick={()=>RemovePackage(product.id)}>
             <img src={require("../../assets/images/delete.png")} alt="Delete" />
         </div>
       </div>
       </div>    
    </>
  )
}

export default Product