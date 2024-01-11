import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Want to Know More</h1>
      <h1 className="primary-heading">Download the Resume</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Resume" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
