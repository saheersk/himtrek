import React from "react";
import { useAbout } from "../../../../Redux/About/aboutMembers";
import { Link } from "react-router-dom";

function AboutMembers() {
  // const dispatch = useDispatch();
  // const member = useSelector((state) => state.member.members);

  // useEffect(() => {
  //   dispatch(fetchMembers());
  // }, [dispatch]);

  const { data: member = [] } = useAbout();


  return (
    <>
      {member?.map((item) => {
        return (
          <div className="item" key={item?.key}>
            <div className="team-member">
              <img src={item?.image} alt={item?.name} />
            </div>
            <div className="text-box">
              <h5>{item?.name}</h5>
              <p>{item?.designation}</p>
              <Link to={item?.facebook_link}>
                <img
                  src={require("../../../assets/images/facebook.png")}
                  alt=""
                />
              </Link>
              <Link to={item?.instagram_link}></Link>
              <img
                src={require("../../../assets/images/instagram.png")}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AboutMembers;
