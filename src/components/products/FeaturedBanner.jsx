import { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
} from "../../assets/img/banner/banner.js";

function FeaturedBanner() {
  const slides = [
    {
      url: Banner1,
    },
    {
      url: Banner2,
    },
    {
      url: Banner3,
    },

    {
      url: Banner4,
    },
    {
      url: Banner5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    currentIndexRef.current = (currentIndexRef.current + 1) % slides.length;
    setCurrentIndex(currentIndexRef.current);
  };
  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };
  const prevSlide = () => {
    currentIndexRef.current =
      (currentIndexRef.current - 1 + slides.length) % slides.length;
    setCurrentIndex(currentIndexRef.current);
  };
  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-full h-[700px] pt-14 pb-16 px-5 xl:px-2 group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=" w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500"
      >
        <div className="flex items-center h-full">
          {/**left arrow */}
          <div className="opacity-0 group-hover:opacity-100 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer w-12">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/**background text */}
          <div className="w-[calc(100%-96px)]">
            {/* <div className="text-white text-center w-[80%] bg-red-700 text-6xl font-black break-words mx-auto h-[300px]">
              <span>HALLOWEEN SALE</span>
            </div> */}
          </div>
          {/**right arrow */}
          <div className="opacity-0 group-hover:opacity-100 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer w-12">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className="text-2xl cursor-pointer hover:text-ct-white-FEFCFF"
          >
            <RxDotFilled className="text-ct-0B0D0C dark:text-ct-F2F7F2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedBanner;
