import React from "react";
import "./PackageSingle.css";

function QuickFacts() {
  return (
    <>  
      <div className="quick-facts">
        <h3>Quick Fact</h3>
        <table>
          <tr>
            <td className="bold">Region:</td>
            <td>Mcleodganj, Himachal Pradesh</td>
          </tr>
          <tr>
            <td className="bold">Start/End Point of Trek:</td>
            <td>Dharamkot</td>
          </tr>
          <tr>
            <td className="bold">Duration:</td>
            <td>1N/2D</td>
          </tr>
          <tr>
            <td className="bold">Trek Distance</td>
            <td>9 Km</td>
          </tr>
          <tr>
            <td className="bold">Trek Height: </td>
            <td>9350 Ft</td>
          </tr>
          <tr>
            <td className="bold">Trek Temperature: </td>
            <td>Day (20°C to 25°C) and Night (5°C to 10°C)</td>
          </tr>
          <tr>
            <td className="bold">Best Time to Trek Triund: </td>
            <td>March-June & August-December</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default QuickFacts;
