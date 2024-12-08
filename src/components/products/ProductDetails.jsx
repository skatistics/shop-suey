import { useEffect, useState } from "react";

function ProductDetails({ product }) {
  const [layer, setLayer] = useState("details");

  function layerChange(newlayer) {
    console.log("oldlayer" + layer);
    console.log("layerchange:" + newlayer);
    if (layer != newlayer) {
      console.log("changed");
      setLayer(newlayer);
    }
  }
  return (
    <div className="px-5">
      <div className="overflow-clip [overflow-clip-margin:1.2px]">
        <button
          className={
            "text-2xl inline-block ml-2 p-2 font-medium rounded-tl-lg rounded-tr-lg text-ct-191819 bg-ct-F2F7F2 dark:text-ct-F2F7F2 dark:bg-ct-222824 origin-bottom" +
            (layer == "details"
              ? " drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] translate-y-0"
              : " translate-y-[50%]")
          }
          onClick={() => layerChange("details")}
        >
          Product Details
        </button>
        <button
          className={
            "text-2xl inline-block ml-2 p-2 font-medium rounded-tl-lg rounded-tr-lg text-ct-191819 bg-ct-F2F7F2 dark:text-ct-F2F7F2 dark:bg-ct-222824 transition-transform origin-bottom " +
            (layer == "reviews"
              ? " drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] translate-y-0"
              : " translate-y-[50%]")
          }
          onClick={() => layerChange("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className="space-y-2 bg-ct-F2F7F2 dark:bg-ct-222824 text-ct-191819 dark:text-ct-F2F7F2 p-4 rounded-tl-sm rounded-tr-sm min-h-[150px]">
        {layer == "details" ? (
          <div className="py-5">
            <ul className="list-disc list-inside">
              <li>Brand: {product.brand}</li>
              <li>Model: {product.model}</li>
              <li>Color: {product.color}</li>
            </ul>
            <br />
            <p>{product.description}</p>
          </div>
        ) : (
          <div className="min-h-[150px]">This product has no reviews.</div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
