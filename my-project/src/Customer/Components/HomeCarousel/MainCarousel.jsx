import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";


const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img
      src={item.image}
      alt="Carousel Item"
      className="cursor-pointer w-full h-full object-cover"
      role="presentation"
    />
  ));

  return (
      <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          autoPlayInterval={2000}
          autoPlay
          disableDotsControls
        />
    
    
  );
};
export default MainCarousel;
