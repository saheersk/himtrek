import React from "react";
import { useCartProduct, useRemoveFromCart } from "../../../Redux/Cart/cart";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
// import { useGearCartProduct } from "../../../Redux/Cart/gearCart";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Product() {
  const dispatch = useDispatch();
  const isProducts = useSelector((cart) => cart.cart.isProducts);
  const userData = useSelector((state) => state.user.data);

  const token = userData?.data?.access;

  const navigate = useNavigate();

  const { data: product = [] } = useCartProduct({ token: token , dispatch: dispatch });
  // const { data: gearCart = [] } = useGearCartProduct({ token: token , dispatch: dispatch }); 

  const { removeFromCartHandler } = useRemoveFromCart({ token })
  
  const RemovePackage = async (id) => {
    try {
      Swal.fire({
        title: `Are you sure you want to remove ${product?.package?.title}`,
        text: "Gears Also will be Removed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "CANCEL",
      }).then((result) => {
        if (result.value) {
          removeFromCartHandler({ productId: id, token: token });
          navigate('/result/')
        }
      });
    } catch (error) {
      console.log("Error removing package from cart:", error);
    }
  }

  return (
    <>
      {isProducts ? (
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
                <small>₹</small> {product?.package?.price_for_adult}
              </span>
            </div>
            <div className="delete" onClick={() => RemovePackage(product?.id)}>
              <img
                src={require("../../assets/images/delete.png")}
                alt="Delete"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="empty-cart">
            <div className="img-box">
              <img
                src={require("../../assets/images/empty-bag.png")}
                alt="Empty"
              />
            </div>
            <h1>Your cart is empty!</h1>
          </div>
        </>
      )}
    </>
  );
}

export default Product;
