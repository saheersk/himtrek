import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import { useAbout } from "../../../../Redux/About/aboutMembers";

function TeamMember() {
  const { data: members = [] } = useAbout();

  return (
    <div>
      {members?.map((member) =>{
        return (
          <div className="item">
          <div className="team-member">
            <img src={member?.image} alt={member?.name} />
          </div>
          <div className="text-box">
            <h5>{member?.name} </h5>
            <p>{member?.designation} </p>
  
            <Link to={member?.facebook_link}  target="_blank">
              <img
                src={require("../../../assets/images/facebook.svg").default}
                alt=""
              />
            </Link>
            <Link to={member?.instagram_link}  target="_blank">
              <img
                src={require("../../../assets/images/instagram.svg").default}
                alt=""
              />
            </Link>
          </div>
        </div>
        )
      })}
     
    </div>
  );
}

export default TeamMember;
