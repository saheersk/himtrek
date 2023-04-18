import React from "react";
import { Link } from "react-router-dom";
import { usePackage } from "../../../../Redux/Home/package";
import "./PackageList.css";

function Package() {
  // const dispatch = useDispatch();
  // const packages = useSelector(
  //   (packages) => packages.package.packages
  // );

  // useEffect(() => {
  //   dispatch(fetchPackage({ month: "", state: "" }));
  // }, [dispatch]);

  const { data: packages = [] } = usePackage();

  return (
    <>
      {packages?.map((item) => {
        return (
          <div className="package" key={item?.id}>
            <Link to={`/package/view/${item.slug}/`}>
              <div className="left-box">
                <div className="image-box">
                  <img src={item?.image} alt={item?.title} />
                </div>
                <div className="text-box">
                  <div className="content">
                    <h3>{item?.title}</h3>
                    <p>{item?.title}</p>
                  </div>
                  <ul>
                      <li className="time">
                        <img
                          src={
                            require("../../../assets/images/clock.svg").default
                          }
                          alt="Package"
                        />
                        <span>{item?.days} Days</span>
                      </li>
                      <li className="location">
                        <span>{item?.state}</span>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="price">
                <h4>₹ {item?.price_for_adult}</h4>
                <img
                  src={require("../../../assets/images/cart.svg").default}
                  alt="Package"
                />
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Package;
