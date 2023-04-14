import React, { useEffect } from "react";
import { fetchCartProduct, removeFromCart } from "../../../Redux/Cart/cart";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";

function Product() {
  const dispatch = useDispatch();
  const product = useSelector((cart) => cart.cart.products);
  const is_Products = useSelector((cart) => cart.cart.is_Products);
  const userData = useSelector((state) => state.user.data);

  const token = userData?.data?.access;

  useEffect(() => {
    dispatch(fetchCartProduct(token));
  }, [token, dispatch]);

  const RemovePackage = (id) => {
    try {
      dispatch(removeFromCart({ productId: id, token: token }));
    } catch (error) {
      console.log("Error removing package from cart:", error);
    }
  };

  return (
    <>
      {is_Products ? (
        <div className="item-container" key={product?.id}>
          <div className="left">
            <div className="item-img">
              <img
                src={product?.package?.image}
                alt={product?.package?.title}
              />
            </div>
            <div className="item-name">
              <h6>{product?.package?.title}</h6>
              <p>{product?.package?.description}</p>
            </div>
          </div>
          <div className="price-details">
            <div className="amount">
              <span className="amount-inr">
                <small>₹</small> {product?.package?.price}
              </span>
            </div>
            <div className="delete" onClick={() => RemovePackage(product.id)}>
              <img
                src={require("../../assets/images/delete.png")}
                alt="Delete"
              />
            </div>
          </div>
        </div>
      ) : (
        <h1>Package not added</h1>
      )}
    </>
  );
}

export default Product;
