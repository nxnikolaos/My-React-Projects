import React from "react";

export const FlipButton = ({ position, value, setValue }) => {
  const flipFunction = () => {
    console.log(value);
    setValue(value + 180);
  };

  return (
    <>
      <button onClick={flipFunction}>{position}</button>
    </>
  );
};
