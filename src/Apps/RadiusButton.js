import React from "react";

export const RadiusButton = ({ position, align, setValue, value }) => {
  

    const radiusChange = (e) =>{
        setValue(Number(e.target.value));
    }

  return (
    <>
      <label>
        {position} {align} Radius
        <input
          value={value}
          onChange={radiusChange}
          type="number"
          size={2}
          name="Radius"
        ></input>
      </label>
    </>
  );
};
