import React, { useState } from "react";
import Header from "../Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import Swal from "sweetalert2";
import TravelerPreview from "./TravelerPreview";
import axios from "axios";
import {
  travelerFailure,
  travelerSuccess,
} from "../../../Redux/TravelerInfo/travelInfo";
import { BASE_URL } from "../../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import "./TravelerInfo.css";
import "react-calendar/dist/Calendar.css";
import { useGearCartProduct } from "../../../Redux/Cart/gearCart";
import { usePackageView } from "../../../Redux/Package/packageView";

function TravelerInfo() {
  const dispatch = useDispatch();

  const package_price_per_person = useSelector(
    (cart) => cart.cart.package_price_per_person
  );
  const package_price_per_children = useSelector(
    (cart) => cart.cart.package_price_per_children
  );
  const package_price_family_of_four = useSelector(
    (cart) => cart.cart.package_price_family_of_four
  );
  const product = useSelector((cart) => cart.cart.products);
  const userData = useSelector((state) => state.user.data);

  const token = userData?.data?.access;

  const [date, setDate] = useState(format(new Date(), "dd MMM Y"));
  const [endDate, setEndDate] = useState(format(new Date(), "dd MMM Y"));

  const [isOpen, setIsOpen] = useState(false);

  const [adults, setAdults] = useState("");
  const [family, setFamily] = useState("");
  const [children, setChildren] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");
  const [comments, setComments] = useState("");
  const [gearTotal, setGearTotal] = useState(0);

  const params = useParams();
  const slug = params.slug;

  const { data: packageView = [] } = usePackageView({ slug: slug });
  const { data: gearCart = [] } = useGearCartProduct({
    token: token,
    dispatch: dispatch,
  });

  const total_gear_price = gearCart.reduce((acc, item) => {
    const price = item?.gears?.price_per_day * parseInt(item?.days);
    return acc + price;
  }, 0);

  let total_price_adult = package_price_per_person * parseInt(adults);
  let total_price_children = package_price_per_children * parseInt(children);
  let total_price_family = package_price_family_of_four * parseInt(family);

  let total_price =
    total_price_adult + total_price_children + total_price_family;

  const total = total_gear_price + (total_price ? total_price : 0);

  //   function handleDateChange(value) {
  //     let select_date = format(value, "dd MMM Y");
  //     let dateObj = new Date(select_date);

  //     dateObj.setDate(dateObj.getDate() + packageView.days);
  //     let end_date = format(dateObj, "dd MMM Y");

  //     setDate(select_date);
  //     setEndDate(end_date);
  //   }

  const navigate = useNavigate();

  const formHandle = (e) => {
    e.preventDefault();
    toggleMenu();
  };

  const confirmHandle = (e) => {
    e.preventDefault();
    toggleMenu();
    setGearTotal(total_gear_price);

    let formattedContactNumber = phone;

    if (!phone.startsWith("+91") && !phone.startsWith("91")) {
      formattedContactNumber = "+91" + phone;
    }

    axios
      .post(
        `${BASE_URL}/packages/checkout/${slug}/`,
        {
          selected_date: date,
          end_date: endDate,
          adults_count: adults,
          family_count: family,
          email,
          full_name: fullName,
          contact_number: formattedContactNumber,
          children_count: children,
          health_requirement: requirements,
          special_requests: comments,
          total_price_for_gear: gearTotal,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        const data = response.data;
        if (response.data.status_code === 6000) {
          dispatch(travelerSuccess(data));
          Swal.fire({
            icon: "success",
            title: "Added Successfully",
            text: " Your details are added successfully",
          });

          navigate("/");
        } else {
          dispatch(travelerFailure(data));
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status_code === 6001) {
          dispatch(travelerFailure(error.response.data));
        }
      });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [allPrice, setAllPrice] = useState(true);
  const priceHandler = () => {
    setAllPrice(!allPrice);
  };

  return (
    <>
      <section id="traveler-info">
        <Header />
        <div className="wrapper">
          <div className="head">
            <h3>Complete your details</h3>
          </div>
          <div className="all-container">
            <div className="participant-info">
              <h3>How many participants?</h3>
              <div className="content-container">
                <form action="#" onSubmit={(e) => formHandle(e)}>
                  <div className="participant-detials">
                    <div className="item">
                      <label htmlFor="adults">Adults</label>
                      <select
                        name="adults"
                        id="adults"
                        onChange={(e) => setAdults(e.target.value)}
                        value={adults}
                        required
                      >
                        <option value="Select">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                    <div className="item">
                      <label htmlFor="family">Family</label>
                      <select
                        name="family"
                        id="family"
                        onChange={(e) => setFamily(e.target.value)}
                        value={family}
                        required
                      >
                        <option value="Select">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                    <div className="item">
                      <label htmlFor="children">Children</label>
                      <select
                        name="children"
                        id="children"
                        onChange={(e) => setChildren(e.target.value)}
                        value={children}
                        required
                      >
                        <option value="Select">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>

                      <span>*Only below 6 years </span>
                    </div>
                  </div>

                  <div className="contact-detials">
                    <h4>Contact Details</h4>
                    <p>Who do we communicate with about this booking?</p>
                    <div className="form-box">
                      <div className="item">
                        <label htmlFor="name">Full name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          onChange={(e) => setFullName(e.target.value)}
                          value={fullName}
                        />
                      </div>
                      <div className="item">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="eamil"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                      <div className="item">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="additional-detials">
                    <h4>And these details as well</h4>
                    <p>
                      Additional details we require to complete this booking
                    </p>
                    <div className="item">
                      <label htmlFor="require">Health Requirement</label>
                      <textarea
                        name="require"
                        id=""
                        cols="50"
                        rows="10"
                        onChange={(e) => setRequirements(e.target.value)}
                        value={requirements}
                      ></textarea>
                    </div>
                  </div>
                  <div className="comments">
                    <h4>Any special requests / comments?</h4>
                    <p>
                      Note: We try our best to accommodate special requests, but
                      it may not always be possible to fulfil them.
                    </p>
                    <input
                      type="text"
                      name="comments"
                      placeholder="Type your comments"
                      onChange={(e) => setComments(e.target.value)}
                      value={comments}
                    />
                  </div>
                  <div className="bottom" onClick={priceHandler}>
                    <div className="info-price">
                      <div className="amount">
                        <h3>
                          Price Per 1 Person:{" "}
                          <span> {package_price_per_person}</span>
                        </h3>
                        <h3>
                          {" "}
                          Total Price for Gear: <span>{total_gear_price}</span>
                        </h3>
                      </div>
                      <div className="small-img">
                        <img
                          src={require("../../assets/images/angle-up-solid.png")}
                          alt="Images"
                          className={allPrice ? "active" : ""}
                        />
                      </div>
                    </div>

                    {allPrice ? (
                      <>
                        <div className="price-box">
                          <h4>
                            Total per Adult
                            <span>₹{package_price_per_person}</span>
                          </h4>
                          <h4>
                            Total per Children
                            <span>₹{package_price_per_children}</span>
                          </h4>
                          <h4>
                            Total Family of 4
                            <span>₹{package_price_family_of_four}</span>
                          </h4>
                          <h4>
                            Total Gear Price <span>₹{total_gear_price}</span>
                          </h4>
                          {gearCart?.map((item) => {
                            return (
                              <h4 key={item?.id}>
                                {item?.gears.product_name} Gear per day {"-"}₹
                                {item?.gears?.price_per_day}
                                <span>
                                  {" "}
                                  ₹
                                  {item?.gears?.price_per_day *
                                    parseInt(item?.days)}
                                </span>
                              </h4>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    <div className="button">
                      <input type="submit" value={"Preview"} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <TravelerPreview
          adults={adults}
          fullName={fullName}
          email={email}
          family={family}
          requirements={requirements}
          comments={comments}
          phone={phone}
          children={children}
          date={date}
          endDate={endDate}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          confirmHandle={confirmHandle}
          total_price={total_price}
          gearTotal={total_gear_price}
          total={total}
        />
      </section>
    </>
  );
}

export default TravelerInfo;
