import React from "react";
import "./ImageList.css";

import ImageCard from "../ImageCard/ImageCard";

const ImageList = ({ images }) => {
  const listOfImages = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="imageList">{listOfImages}</div>;
};

export default ImageList;
