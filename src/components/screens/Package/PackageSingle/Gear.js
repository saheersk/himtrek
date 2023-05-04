import React, { memo, useContext } from "react";
import Swal from "sweetalert2";

import "./PackageSingle.css";
import { useDispatch, useSelector } from "react-redux";
import { useGear } from "../../../../Redux/Package/gears";
import {
  useAddToGearCart,
  useGearCartProduct,
} from "../../../../Redux/Cart/gearCart";
import { useNavigate } from "react-router-dom";
import { SlugContext } from "./PackageSingle";

function Gear() {
  const dispatch = useDispatch();

  const param = useContext(SlugContext);

  const { data: gear = [] } = useGear({ slug: param });

  const userData = useSelector((state) => state.user.data);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isProduct = useSelector((cart) => cart.cart.isProducts);
  const product = useSelector((cart) => cart.cart.products);

  const token = userData?.data?.access;

  const { AddToGearCartHandler } = useAddToGearCart({ token });
  const { data: gearCart = [] } = useGearCartProduct({
    token: token,
    dispatch: dispatch,
  });

  const navigate = useNavigate();

  const handleGearCart = (id, gearName) => {
    if(isLoggedIn){
    if (isProduct) {
    let packName = "";
    for (let i = 0; i < gearCart.length; i++) {
      if (gearCart[i].gears.product_name === gearName) {
        Swal.fire({
          title: `Already in Cart`,
          text: "This gear is already exists",
          icon: "error",
          showCancelButton: true,
          confirmButtonText: "Go To Cart",
          cancelButtonText: "CANCEL",
        }).then((result) => {
          if (result.value) {
            navigate('/cart/')
          }
        });
        return;
      }
    }
    gear?.map((item) => {
      return(
      packName = item.package.id
      )
    });
      if (packName === product.package.id) {
        AddToGearCartHandler({
          productId: id,
          token: token,
          slug: product.package.slug,
        });
        Swal.fire({
          title: `${gearName} Added to Cart`,
          text: "Successfully Added to Cart",
          icon: "success",
        })
      } else {
        Swal.fire({
          title: `${product?.package?.title} Already in Cart`,
          text: `This gear is not belong to ${product?.package?.title} Package`,
          icon: "error",
        });
      }
    } else {
      Swal.fire({
        title: `No Package in Cart`,
        text: "Add Package then Gears",
        icon: "error",
      });

    }
  }else {
    navigate('/login')
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
                      handleGearCart(item?.id, item?.gear?.product_name)
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

export default memo(Gear);
