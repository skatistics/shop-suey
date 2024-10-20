import React from "react";
import ImageMagnifier from "./ImageMagnifier";

function ProductImage({ image }) {
  return (
    <div id="imgId">
      <ImageMagnifier parentId={"imgId"} image={image} />
      <img
        src={image}
        alt="Product Image"
        className=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] "
      />
      {/* w-[100%] h-[100%] object-cover object-[0,0] */}
    </div>
  );
}

export default ProductImage;
