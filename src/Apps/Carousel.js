import React, { useState } from "react";

document.title = `Carousel App`;

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

const Carousel = () => {
  const [imgCount, setImgCount] = useState(0);

  const nextImg = () => {
    // if (imgCount >= images.length - 1) {
    //   setImgCount(0);
    //   return;
    // }
    // setImgCount(imgCount + 1);
    setImgCount(imgCount === images.length - 1 ? 0 : imgCount + 1);
  };

  const prevImg = () => {
    // if (imgCount === 0) {
    //   setImgCount(images.length - 1);
    //   return;
    // }
    // setImgCount(imgCount - 1);
    setImgCount(imgCount === 0 ? images.length - 1 : imgCount - 1);
  };

  return (
    <>
      <h1>El Carousel</h1>
      <section className="carousel-section">
        <button onClick={() => prevImg()}>Up</button>
        {images.map(
          (image, index) =>
            imgCount === index && (
              <div key={image}>
                <img src={image} alt={index}></img>
              </div>
            )
        )}
        <button onClick={() => nextImg()}>Down</button>
      </section>
    </>
  );
};

export default Carousel;
