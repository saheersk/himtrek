import React, { memo, useContext } from "react";
import { useQuickFact } from "../../../../Redux/Package/quickFact";
import { SlugContext } from "./PackageSingle";
import "./PackageSingle.css";

function QuickFacts() {
  const param = useContext(SlugContext);

  const { data: quickFact = [] } = useQuickFact({ slug: param });
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

export default memo(QuickFacts);
