import React from "react";
import './Contact.css';

export const Contact = () => {
  return (
    <div className="form">
      <form action="/action_page.php">
        <label htmlFor="fname">Full Name</label>
        <input type="text" id="fname" name="fullname" placeholder="Your first and last name" />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Type your message here"></textarea>
      
      
        <input type="submit" value="Submit" />
      </form>
    </div>
  ); 
};

export default Contact;
