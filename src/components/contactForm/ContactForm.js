import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={event => setName(event.target.value)}/>
      <input type="text" placeholder="Phone" value={phone} onChange={event => setPhone(event.target.value)} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
      <input type="text" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/>
      <button>Submit</button>
    </form>
  );
};
