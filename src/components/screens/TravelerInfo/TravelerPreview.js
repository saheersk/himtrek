import React from 'react'
import { useSelector } from 'react-redux';

function TravelerPreview({ adults, fullName, email, family, requirements, comments, phone, children, date, endDate, isOpen, toggleMenu, confirmHandle, total_price }) {
  const product = useSelector((cart) => cart.cart.products);

  return (
    <>
    <div className={`confirm-box-overlay ${isOpen ? "open" : ""}`}>
          <div className="confirm-box">
            <h3>Are you confirm?</h3>
            <table>
              <div className="item-box">
                <tr>
                  <td>Full Name : </td>
                  <td> {fullName}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Email : </td>
                  <td> {email}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Phone : </td>
                  <td> {phone}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Adults : </td>
                  <td> {adults}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Children : </td>
                  <td> {children}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Family : </td>
                  <td> {family}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Requirements : </td>
                  <td> {requirements}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Comments : </td>
                  <td> {comments}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Package : </td>
                  <td> {product?.package?.title}</td>
                </tr>
              </div>
            </table>
            <div className="item-box-date">
              <h4>{date} to {endDate}</h4>
            </div>
            <div className="item-box-date">
              <h4>Total Price to {total_price}</h4>
            </div>
            <div className="button">
              <button onClick={toggleMenu} className="back">
                Back
              </button>

              <button onClick={(e) => confirmHandle(e)}>Confirm</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default TravelerPreview