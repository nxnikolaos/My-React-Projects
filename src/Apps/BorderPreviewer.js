import React, { useState } from "react";
import { RadiusButton } from "./RadiusButton";

const BorderPreviewer = () => {
  const [topLRadius, setTopLRadius] = useState(5);
  const [topRRadius, setTopRRadius] = useState(5);
  const [botLRadius, setBotLRadius] = useState(5);
  const [botRRadius, setBotRRadius] = useState(5);

  return (
    <>
      <h1>This is a border radius previewer!</h1>
      <RadiusButton
        setValue={setTopLRadius}
        value={topLRadius}
        position={"Top"}
        align={"Left"}
      ></RadiusButton>
      <RadiusButton
        setValue={setTopRRadius}
        value={topRRadius}
        position={"Top"}
        align={"Right"}
      ></RadiusButton>
      <div
        className="box"
        style={{
          borderTopLeftRadius: topLRadius,
          borderTopRightRadius: topRRadius,
          borderBottomLeftRadius: botLRadius,
          borderBottomRightRadius: botRRadius,
        }}
      ></div>
      <RadiusButton
        setValue={setBotLRadius}
        value={botLRadius}
        position={"Bottom"}
        align={"Left"}
      ></RadiusButton>
      <RadiusButton
        setValue={setBotRRadius}
        value={botRRadius}
        position={"Bottom"}
        align={"Right"}
      ></RadiusButton>

      <p style={{ textAlign: "left" }}>
        .box{`{`}
        <br></br>
        width: 200px; <br></br>
        height: 200px; <br></br>
        margin: 2rem auto; <br></br>border: 3px solid black;<br></br>
        background-color: white;<br></br>
        border-top-left-radius: {topLRadius};<br></br>
        border-top-right-radius: {topRRadius};<br></br>
        border-bottom-left-radius: {botLRadius};<br></br>
        border-bottom-right-radius: {botRRadius};<br></br>
        {"}"}
      </p>
    </>
  );
};

export default BorderPreviewer;
