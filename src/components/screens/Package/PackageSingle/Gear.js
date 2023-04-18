import React, { useEffect } from "react";
import Swal from "sweetalert2";

import "./PackageSingle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGear, useGear } from "../../../../Redux/Package/gears";
import { addGearToCart, fetchGearCart } from "../../../../Redux/Cart/gearCart";
import { useNavigate } from "react-router-dom";
import { fetchCartProduct } from "../../../../Redux/Cart/cart";

function Gear({ slug }) {
  const dispatch = useDispatch();
  // const gear = useSelector((state) => state.gear.gear);
  const gearCart = useSelector((state) => state.gearCart.gearCart);
  // const message = useSelector((state) => state.gear.message);
  const userData = useSelector((state) => state.user.data);
  const is_Products = useSelector((cart) => cart.cart.is_Products);

  const token = userData?.data?.access;

  // console.log(message, "=====message");

  // console.log(gear, "gear");


  const navigate = useNavigate();

  const handleGearCart = (id, product) => {
    const item = gearCart.find((item) => item.gears.id === id);
    if (is_Products) {
      if (item) {
        Swal.fire({
          title: `Already in Cart ${product}`,
          text: `${product} Moved to cart`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Go to Cart",
          cancelButtonText: "View",
        }).then((result) => {
          if (result.value) {
            navigate("/cart/");
          }
        });
      } else {
        dispatch(addGearToCart({ productId: id, token: token }));
        Swal.fire({
          title: `${product} Added to Cart`,
          text: "Successfully Added to Cart",
          icon: "success",
        });
        dispatch(fetchCartProduct(token));
        dispatch(fetchGearCart({ token: token }));
      }
    } else {
      dispatch(fetchCartProduct(token));
      dispatch(fetchGearCart({ token: token }));
      Swal.fire({
        title: `No Package in Cart`,
        text: "Add Package then Gears",
        icon: "error",
      });
    }

  };

  useEffect(() => {
    dispatch(fetchGear(slug));
    dispatch(fetchCartProduct(token));
    dispatch(fetchGearCart({ token: token }));
  }, [slug, dispatch, token]);

  const { data: gear = [] } = useGear({ slug: slug  });

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
                    <img src={item?.gear?.image} alt={item?.gear?.product_name} />
                  </div>
                  <h6>{item?.gear?.product_name}</h6>
                  <span>₹ {item?.rental_price} / Day</span>
                  <button
                    onClick={() => handleGearCart(item?.gear?.id, item?.gear?.product_name)}
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
