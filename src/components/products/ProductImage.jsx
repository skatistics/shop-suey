import React, { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import { ImageMagnifier } from "@kyverus/react-custom-magnifier";
import { useSystemPreferencesContext } from "../contexts/SystemPreferencesContextProvider";

function ProductImage({ image }) {
  const [enableZoom, setEnableZoom] = useState(false);
  const { isTouch } = useSystemPreferencesContext();

  return (
    <div className="relative">
      {!isTouch && (
        <FaSearchPlus
          className={
            "absolute right-5 top-2 size-10 z-[3000]" +
            (enableZoom ? " text-ct-45634F" : " text-ct-0B0D0C")
          }
          onClick={() => setEnableZoom(!enableZoom)}
        />
      )}
      {enableZoom && !isTouch ? (
        <ImageMagnifier src={image} cursorOnly={false} fixedWidth={false} />
      ) : (
        <img src={image} className="mb-[6px]" />
      )}
    </div>
  );
}

export default ProductImage;
