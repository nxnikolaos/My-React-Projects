import React, { useState } from "react";

const BorderPreviewer = () => {
  const [topLRadius, setTopLRadius] = useState(5);
  const [topRRadius, setTopRRadius] = useState(5);
  const [botLRadius, setBotLRadius] = useState(5);
  const [botRRadius, setBotRRadius] = useState(5);

  return (
    <>
      <h1>This is a border radius previewer!</h1>
      <label>
        Top Left Radius
        <input
          value={topLRadius}
          onChange={(e) => setTopLRadius(Number(e.target.value))}
          type="number"
          size={2}
          name="topLeftRadius"
        ></input>
      </label>
      <label className="float-right">
        Top Right Radius
        <input
          value={topRRadius}
          onChange={(e) => setTopRRadius(Number(e.target.value))}
          type="number"
          size={2}
          name="topRightRadius"
        ></input>
      </label>
      <div
        className="box"
        style={{
          borderTopLeftRadius: topLRadius,
          //   backgroundColor: "red",
          borderTopRightRadius: topRRadius,
          borderBottomLeftRadius: botLRadius,
          borderBottomRightRadius: botRRadius,
        }}
      ></div>
      <label>
        Bottom Left Radius
        <input
          value={botLRadius}
          onChange={(e) => setBotLRadius(Number(e.target.value))}
          type="number"
          size={2}
          name="bottomLeftRadius"
        ></input>
      </label>
      <label className="float-right">
        Bottom Right Radius
        <input
          value={botRRadius}
          onChange={(e) => setBotRRadius(Number(e.target.value))}
          type="number"
          size={2}
          name="bottomRightRadius"
        ></input>
      </label>
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
