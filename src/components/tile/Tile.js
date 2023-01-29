import React from "react";

export const Tile = ({ contact }) => {
  const values = Object.values(contact);
  return (
    <div className="tile-container">
      {values.map((value, index) => {
        if (index === 0) {
          return <p key={index} className="tile-title">{value}</p>;
        } else {
          return <p key={index} className="tile">{value}</p>;
        }
      })}
    </div>
  );
};
