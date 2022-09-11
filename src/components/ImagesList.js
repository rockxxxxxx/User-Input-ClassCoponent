import React from "react";
import "../css/imageList.css";
import ImageCard from "./ImageCard";

export default function ImagesList(props) {
  const data = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  return <div className="image-list">{data}</div>;
}
