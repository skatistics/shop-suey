import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function FeaturedBanner() {
  const slides = [
    {
      url: "https://images.acer.com/is/image/acer/Soar%20in%20Solitude_1920x1080?$responsive$&bfc=off",
    },

    {
      url: "https://images.acer.com/is/image/acer/2023_Predator_Alternative_Wallpaper_Final%20Destination_1920x1080?$responsive$&bfc=off",
    },
    {
      url: "https://images.acer.com/is/image/acer/Our%20Last%20Hope_1920x1080?$responsive$&bfc=off",
    },
    {
      url: "https://images.acer.com/is/image/acer/2023_Predator_Alternative_Wallpaper_Apex%20of%20an%20Empire_1920x1080?$responsive$&bfc=off",
    },
    {
      url: "https://images.acer.com/is/image/acer/2023_Predator_Wallpaper_Seek%20the%20Stars_1920x1080?$responsive$&bfc=off",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group ">
      {/**background text */}
      <div className="absolute top-1/3 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-5xl font-bold z-20  p-3">
        HACKDOG SALE
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/**left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/**right arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className="text-2xl cursor-pointer hover:text-ct-white-FEFCFF"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedBanner;
