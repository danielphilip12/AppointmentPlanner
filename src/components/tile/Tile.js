import React from "react";

export const Tile = ({ item }) => {
  const values = Object.values(item);
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
