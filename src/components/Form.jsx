import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="form">
      <div className="form-input">
        <label htmlFor="">
          First name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </label>
      </div>
      <label htmlFor="email">
        Email
        <input type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="">
        Message
        <textarea type="text" value={message}
        onChange={(e)=>setMessage(e.target.value)} />
      </label>
    </form>
  );
}

export default Form;
