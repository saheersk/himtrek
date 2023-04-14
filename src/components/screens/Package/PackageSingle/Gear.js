import React, { useEffect } from "react";
import "./PackageSingle.css";
import { useDispatch, useSelector } from "react-redux";
import { addGearToCart, fetchGear } from "../../../../Redux/Package/gears";

function Gear({ slug }) {
  const dispatch = useDispatch();
  const gear = useSelector((state) => state.gear.gear);
  const message = useSelector((state) => state.gear.message);
  const userData = useSelector((state) => state.user.data);

  const token = userData?.data?.access;

  console.log(message, "===message");

  const handleGearCart = (id) => {
    dispatch(addGearToCart({productId: id, token: token}))
  }

  useEffect(() => {
    dispatch(fetchGear(slug));
  }, [slug, dispatch]);

  return (
    <>
      <div className="slide-container">
        <div className="wrapper">
          <h5>We provide rental products</h5>
          <div className="slide">
            {gear.map((item) => {
              return (
                <div className="item" key={item?.id}>
              <div className="product-img">
                <img
                  src={item?.image}
                  alt={item?.title}
                />
              </div>
              <h6>{item?.title}</h6>
              <span>₹ {item?.price_per_day} / Day</span>
              <button onClick={() => handleGearCart(item?.id)}>Add with Package</button>
            </div>
              )
            })}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Gear;
