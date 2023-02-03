import React from 'react'
import './Contact.css'
import Header from '../Header/Header'

function Contact() {
  return (
    <>
    <div id="contact-container">
        <Header />
        <div className="wrapper">
            <h4>We'll Be Happy To <span>Help You!</span></h4>
            <div className="input-container">
                <div className="left">
                    <form action="">
                        <input type="text" placeholder='Your Name' />
                        <input type="text" placeholder='Mobile Number' />
                        <input type="text" placeholder='Organization(Optional)' />
                        <label for="message">Your Message</label>
                        <textarea id="message"></textarea>
                        <input type="submit"  value="Send" />
                    </form>
                </div>
                <div className="right">
                <img
                  src={require("../../assets/images/contact.svg").default}
                  alt="Contact"
                />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact