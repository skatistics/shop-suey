import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProductsMultiCarousel({ id, products }) {
  const [arrowShow, setArrowShow] = useState(true);

  function disableArrows() {
    setArrowShow(false);
  }
  function enableArrows() {
    setArrowShow(true);
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
    <div className="md:container mx-auto" id={id}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={arrowShow}
        transitionDuration={300}
      >
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="p-2"
              onMouseDown={disableArrows}
              onMouseLeave={enableArrows}
              onMouseUp={enableArrows}
            >
              <ProductItem product={product} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}