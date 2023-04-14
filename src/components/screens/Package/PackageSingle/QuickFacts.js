import React, { useEffect } from "react";
import "./PackageSingle.css";
import { fetchQuickFact } from "../../../../Redux/Package/quickFact";
import { useDispatch, useSelector } from "react-redux";

function QuickFacts({ slug }) {
  const dispatch = useDispatch();
  const quickFact = useSelector((state) => state.quickFact.quickFact);
  
  useEffect(() => {
    dispatch(fetchQuickFact(slug));
  }, [slug, dispatch]);

  return (
    <>  
      <div className="quick-facts">
        <h3>Quick Fact</h3>
        <table>
          <tr>
            <td className="bold">Region:</td>
            <td>{quickFact?.region}</td>
          </tr>
          <tr>
            <td className="bold">Start/End Point of Trek:</td>
            <td>{quickFact?.start_and_endpoint}</td>
          </tr>
          <tr>
            <td className="bold">Duration:</td>
            <td>{quickFact?.duration}</td>
          </tr>
          <tr>
            <td className="bold">Trek Distance</td>
            <td>{quickFact?.distance}</td>
          </tr>
          <tr>
            <td className="bold">Trek Height: </td>
            <td>{quickFact?.height}</td>
          </tr>
          <tr>
            <td className="bold">Trek Temperature: </td>
            <td>{quickFact?.temperature}</td>
          </tr>
          <tr>
            <td className="bold">Best Time to Trek Triund: </td>
            <td>{quickFact?.best_time}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default QuickFacts;
