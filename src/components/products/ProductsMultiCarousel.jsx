import { useState, useMemo } from "react";
import ProductItem from "./ProductItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useProductContext } from "../contexts/ProductContextProvider";

function ProductsMultiCarousel() {
  const { discountedProducts } = useProductContext();
  const [arrowShow, setArrowShow] = useState(true);
  const [index, setIndex] = useState(8);
  const [loading, setLoading] = useState(false);

  const temp = useMemo(() => {
    return index >= discountedProducts.length
      ? discountedProducts
      : discountedProducts.slice(0, index);
  });

  function loadMoreProducts() {
    setIndex(index + 4);
    setLoading(false);
    console.log("done loading");
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      className={
        "md:container mx-auto select-none  active:cursor-grabbing" +
        (loading ? " cursor-wait" : " cursor-grab")
      }
      disabled={loading}
    >
      <Carousel
        afterChange={(previousSlide, { currentSlide, onMove }) => {
          if (currentSlide > index - 5) {
            if (!(index >= discountedProducts.length)) {
              loadMoreProducts();
            }
          }
        }}
        beforeChange={(nextSlide, { currentSlide, onMove }) => {
          if (nextSlide > index - 5) {
            if (!(index >= discountedProducts.length)) {
              setLoading(true);
              console.log("loading");
            }
          }
        }}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={arrowShow}
        transitionDuration={300}
      >
        {temp.map((product) => {
          return (
            <div
              key={product.id}
              className="p-2"
              onMouseDown={() => setArrowShow(false)}
              onMouseLeave={() => setArrowShow(true)}
              onMouseUp={() => setArrowShow(true)}
            >
              <ProductItem product={product} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ProductsMultiCarousel;
