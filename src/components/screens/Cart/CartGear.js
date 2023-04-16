import React, { useEffect, useState } from "react";
import "./Cart.css";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  GearItemAddOrSub,
  fetchGearCart,
  removeFromGearCart,
} from "../../../Redux/Cart/gearCart";

function CartGear() {
  const dispatch = useDispatch();
  const gearCart = useSelector((state) => state.gearCart.gearCart);
  const message = useSelector((state) => state.gearCart.message);
  const userData = useSelector((state) => state.user.data);
  const is_gear = useSelector((cart) => cart.gearCart.is_gear);

  const [updatedDays, setUpdatedDays] = useState({});

  const token = userData?.data?.access;

  const Add = "add";
  const Sub = "sub";


  console.log(gearCart, 'gear');

  const handleGearCart = (id, name) => {
    Swal.fire({
      title: `Are you sure you want to remove ${name}`,
      text: `${name} will be removed`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "CANCEL",
    }).then((result) => {
      if (result.value) {
        dispatch(removeFromGearCart({ productId: id, token: token }));
      }

    });
  };

  const handleDays = (id, action) => {
    const days =
      updatedDays[id] !== undefined
        ? updatedDays[id]
        : gearCart.find((item) => item.id === id).days;
    const newDays = action === Add ? days + 1 : days - 1;
    setUpdatedDays({ ...updatedDays, [id]: newDays });

    if (newDays === 0) {
      setUpdatedDays({ ...updatedDays, [id]: "" });
    }

    dispatch(
      GearItemAddOrSub({
        productId: id,
        token: token,
        action: action,
        onSuccess: () => {},
      })
    );
  };

  console.log(message, "====");

  useEffect(() => {
    dispatch(fetchGearCart({ token: token }));
  }, [dispatch, token, updatedDays]);

  return (
    <>
      <div className="slide-cart">
        <div className="wrapper">
          <h5>Gears</h5>
          {is_gear ? (

            <div className="slide">
              {gearCart.map((item) => {
                const days =
                  updatedDays[item?.id] !== undefined
                    ? updatedDays[item?.id]
                    : item?.days;
                return (
                  <div className="item" key={item?.id}>
                    <div className="left">
                      <div className="product-img">
                        <img
                          src={item?.gears?.image}
                          alt={item?.gears?.product_name}
                        />
                      </div>
                    </div>
                    <h5>{item?.gears?.product_name}</h5>
                    <div className="center">
                      <div className="day-box">
                        <div
                          onClick={() => handleDays(item?.id, Sub)}
                          className="image-box"
                        >
                          <img
                            src={
                              require("../../assets/images/minus-solid.svg")
                                .default
                            }
                            alt="Location"
                          />
                        </div>
                        <span>{days} Day</span>
                        <div
                          onClick={() => handleDays(item?.id, Add)}
                          className="image-box"
                        >
                          <img
                            src={
                              require("../../assets/images/plus-solid.svg")
                                .default
                            }
                            alt="Location"
                          />
                        </div>
                      </div>
                      <h6>₹ {item?.gears?.price_per_day} / Day</h6>
                    </div>
                    <button
                      onClick={() =>
                        handleGearCart(item?.id, item?.gears?.product_name)
                      }
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (

            <div className="empty-cart">
              <div className="img-box">
                <img
                  src={require("../../assets/images/empty-bag.png")}
                  alt="Empty"
                />
              </div>
              <h1>You are not selected gears!</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartGear;
