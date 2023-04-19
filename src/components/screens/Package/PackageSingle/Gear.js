import React from "react";
import Swal from "sweetalert2";

import "./PackageSingle.css";
import { useSelector } from "react-redux";
import { useGear } from "../../../../Redux/Package/gears";
import { useAddToGearCart } from "../../../../Redux/Cart/gearCart";
import { useNavigate } from "react-router-dom";

function Gear({ slug }) {
  const { data: gear = [] } = useGear({ slug: slug  });

  const gearCart = useSelector((state) => state.gearCart.gearCart);
  const userData = useSelector((state) => state.user.data);
  const isProducts = useSelector((cart) => cart.cart.isProducts);

  const token = userData?.data?.access;

  const { AddToGearCartHandler } = useAddToGearCart({ token })

  const navigate = useNavigate();

  const handleGearCart = (id, product) => {
    const item = gearCart.find((item) => item.gears.id === id);
    if (isProducts) {
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
        AddToGearCartHandler({ productId: id, token: token, slug: slug })
        Swal.fire({
          title: `${product} Added to Cart`,
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
