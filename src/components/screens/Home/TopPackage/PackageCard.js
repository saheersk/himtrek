import React from "react";
import { usePlace } from "../../../../Redux/Home/state";
import { Link } from "react-router-dom";
import "./ToPackage.css";

function PackageCard() {
  // const dispatch = useDispatch();
  // const states = useSelector((state) => state.state.states);
  // const status = useSelector((state) => state.states.status);
  // const error = useSelector((state) => state.states.error);

  // useEffect(() => {
  //   dispatch(fetchState());
  // }, [dispatch]);

  const { data: states = [] } = usePlace();
  
  return (
    <>
    {states?.map((item) =>{
      return (
        <li data-aos="fade-up" key={item?.id}>
          <Link to={`/result/?state=${item?.state}`}>
        <div className="image-box">
          <img src={item?.image} alt={item?.state} />
        </div>
        <div className="shade">
          <span>{item?.state}</span>
        </div>
      </Link>
      </li>
      )
    })}
      
    </>
  );
}

export default PackageCard;
