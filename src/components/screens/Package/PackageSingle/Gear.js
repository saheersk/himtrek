import React from "react";
import Swal from "sweetalert2";

import "./PackageSingle.css";
import { useDispatch, useSelector } from "react-redux";
import { useGear } from "../../../../Redux/Package/gears";
import {
  useAddToGearCart,
  useGearCartProduct,
} from "../../../../Redux/Cart/gearCart";
import { useNavigate } from "react-router-dom";

function Gear({ slug }) {
  const dispatch = useDispatch();

  const { data: gear = [] } = useGear({ slug: slug });

  const userData = useSelector((state) => state.user.data);
  const isProduct = useSelector((cart) => cart.cart.isProducts);
  const product = useSelector((cart) => cart.cart.products);

  const token = userData?.data?.access;

  const { AddToGearCartHandler } = useAddToGearCart({ token });
  const { data: gearCart = [] } = useGearCartProduct({
    token: token,
    dispatch: dispatch,
  });

  const navigate = useNavigate();

  const handleGearCart = (id, gear) => {
    let pack;
    const item = gearCart.find((item) => item.gears.id === id);
    const prod = gearCart.map((item) => {
      return (pack = item.package);
    });
    if (prod.length === 0) {
      pack = product.package;
    }
    if (isProduct) {
      if (item) {
        Swal.fire({
          title: `Already in Cart ${gear}`,
          text: `${gear} Moved to cart`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Go to Cart",
          cancelButtonText: "View",
        }).then((result) => {
          if (result.value) {
            navigate("/cart/");
          }
        });
      } else if (product.package.id === pack.id) {
        Swal.fire({
          title: `${product?.package?.title} Already in Cart`,
          text: `This gear is not belong to ${product?.package?.title} Package`,
          icon: "error",
        });
      } else {
        AddToGearCartHandler({ productId: id, token: token, slug: slug });
        Swal.fire({
          title: `${gear} Added to Cart`,
          text: "Successfully Added to Cart",
          icon: "success",
        });
      }
    } else {
      Swal.fire({
        title: `No Package in Cart`,
        text: "Add Package then Gears",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="slide-container">
        <div className="wrapper">
          <h5>We provide rental products</h5>
          <div className="slide">
            {gear?.map((item) => {
              return (
                <div className="item" key={item?.gear?.id}>
                  <div className="product-img">
                    <img
                      src={item?.gear?.image}
                      alt={item?.gear?.product_name}
                    />
                  </div>
                  <h6>{item?.gear?.product_name}</h6>
                  <span>₹ {item?.rental_price} / Day</span>
                  <button
                    onClick={() =>
                      handleGearCart(item?.gear?.id, item?.gear?.product_name)
                    }
                  >
                    Add with Package
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gear;
