import React from "react";
import { useDos, useWont } from "../../../../Redux/Package/TravelIncludes";
import "./PackageSingle.css";

function Additions({ slug }) {
  // const dispatch = useDispatch();
  // const dos = useSelector((state) => state.travelInclude.dos);
  // const wonts = useSelector((state) => state.travelInclude.wonts);

  // useEffect(() => {
  //   dispatch(fetchTravelDos(slug));
  //   dispatch(fetchTravelWonts(slug));
  // }, [slug, dispatch]);

  const { data: dos = [] } = useDos({ slug: slug });
  const { data: wonts = [] } = useWont({ slug: slug });


  return <>
     <div className="additions">
            <h5>INCLUSIONS/EXCLUSIONS</h5>
            <h2>What we'll give. What we won't</h2>
            <div className="container-item">
              <div className="item ">
                <h6>What is included in the tour</h6>
                <ul>
                  {dos.map((item) => {
                    return (
                      <li key={item?.id}>
                      <img
                        src={require("../../../assets/images/tick.svg").default}
                        alt="Tick"
                      />
                      {item?.dos}
                    </li>
                    )
                  })}
                  
                </ul>
              </div>
              <div className="item ">
                <h6>What is not included in the tour</h6>
                <ul>
                  {wonts.map((item) => {
                    return (
                      <li key={item?.id}>
                    <img
                      src={require("../../../assets/images/cross.svg").default}
                      alt="Cross"
                    />
                    {item?.wont}
                  </li>
                    )
                  })}
                  
                </ul>
              </div>
            </div>
          </div>
  </>;
}

export default Additions;
