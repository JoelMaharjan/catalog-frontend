import React from "react";
import Form from "../components/Form";
import Button from "../components/Button";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-wrapper">
        <p className="contact-heading">Contact Us</p>
        <p className="sub-text">
          The latest resources includes Transparency Toolkit, Evidence, Best
          Practices
        </p>
        <Form />
        <Button>
          <p>Submit</p>
        </Button>
      </div>
    </div>
  );
}

export default ContactUs;
