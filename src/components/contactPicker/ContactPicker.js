import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={onChange}>
      <option value=""></option>
      {contacts.map((contact, index) => {
        return <option key={index} value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
