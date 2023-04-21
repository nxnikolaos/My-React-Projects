import React, { useState } from "react";

export const RadiusButton = ({ position, align }) => {
  const [radius, setRadius] = useState(5);

  return (
    <>
      <label>
        {position} {align} Radius
        <input
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          type="number"
          size={2}
          name="Radius"
        ></input>
      </label>
    </>
  );
};
