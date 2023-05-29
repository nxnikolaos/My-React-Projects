import React, { useState, useTransition } from "react";
import image from "./Images/2178.webp";
import { FlipButton } from "./FlipButton";

const ImageFlipper = () => {
  const [degreesX, setDegreesX] = useState(0);
  const [degreesY, setDegreesY] = useState(0);

  const lmao = degreesY + "deg";

  return (
    <>
      <h2>Flip an Image</h2>
      <img
        className="img-flip"
        src={image}
        width={250}
        height={250}
        alt="wow"
        style={{
          transform: `rotateX(${degreesX}deg) rotateY(${degreesY}deg)`,
          backgroundColor: `red`,
        }}
      ></img>
      <section className="inline-navigation">
        <FlipButton
          position={"Up"}
          value={degreesX}
          setValue={setDegreesX}
          lmao={lmao}
        ></FlipButton>
        <FlipButton
          position={"Right"}
          value={degreesY}
          setValue={setDegreesY}
          lmao={lmao}
        ></FlipButton>
      </section>
    </>
  );
};

export default ImageFlipper;
