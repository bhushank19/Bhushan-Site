import React from "react";

export default function BackgroundImage(props) {
  const bg_images = {
    "wall-1": `${process.env.PUBLIC_URL}/images/wallpapers/wall-1.jpg`,
    "wall-2": `${process.env.PUBLIC_URL}/images/wallpapers/wall-2.jpg`,
    "wall-3": `${process.env.PUBLIC_URL}/images/wallpapers/wall-3.jpg`,
    "wall-4": `${process.env.PUBLIC_URL}/images/wallpapers/wall-4.jpg`,
    "wall-5": `${process.env.PUBLIC_URL}/images/wallpapers/wall-5.jpg`,
    "wall-6": `${process.env.PUBLIC_URL}/images/wallpapers/wall-6.jpg`,
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg_images[props.img]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
      }}
      className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full"
    ></div>
  );
}
