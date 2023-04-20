import React, { useState } from "react";

const BorderPreviewer = () => {
  const [topLRadius, setTopLRadius] = useState(5);
  const [topRRadius, setTopRRadius] = useState(5);
  const [botLRadius, setBotLRadius] = useState(5);
  const [botRRadius, setBotRRadius] = useState(5);

  return (
    <>
      <h1>This is a border previewer!</h1>
      <label>
        Top Left Radius
        <input
          value={topLRadius}
          onChange={(e) => setTopLRadius(e.target.value)}
          type="number"
          size={2}
          name="topLeftRadius"
          //   defaultValue={5}
        ></input>
      </label>
      <label className="float-right">
        Top Right Radius
        <input
          value={topRRadius}
          onChange={(e) => setTopRRadius(e.target.value)}
          type="number"
          size={2}
          name="topRightRadius"
          //   defaultValue={5}
        ></input>
      </label>
      <div className="box"></div>
      <label>
        Bottom Left Radius
        <input
          value={botLRadius}
          onChange={(e) => setBotLRadius(e.target.value)}
          type="number"
          size={2}
          name="bottomLeftRadius"
          //   defaultValue={5}
        ></input>
      </label>
      <label className="float-right">
        Bottom Right Radius
        <input
          value={botRRadius}
          onChange={(e) => setBotRRadius(e.target.value)}
          type="number"
          size={2}
          name="bottomRightRadius"
          //   defaultValue={5}
        ></input>
      </label>
    </>
  );
};

export default BorderPreviewer;
