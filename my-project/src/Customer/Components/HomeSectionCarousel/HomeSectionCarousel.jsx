import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from "@mui/material";
import { useState } from "react";

const HomeSectionCarousel = ({data,SectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
      0: { items: 1 },
      720: { items: 3 },
      1024: { items: 5 },
    };
   
    const items = data.slice(0,10).map((item)=> <HomeSectionCard product={item} />)
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = (i) => {
      setActiveIndex(i.item)
    }
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-800">{SectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
        items={items}
        disableButtonsControls
        responsive={responsive}
        disableDotsControls
        activeIndex={activeIndex}
        onSlideChanged={syncActiveIndex}
      />
      {activeIndex !== items.length - 5 && <Button variant="contained" onClick={slideNext} sx={{position: 'absolute', top: '8rem', right: '0rem',transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white'}} aria-label="next">
        <KeyboardArrowLeftIcon sx={{rotate: '90deg', color: 'black'}}/>
      </Button>}
      {activeIndex !== 0 && <Button variant="contained" onClick={slidePrev} sx={{position: 'absolute', top: '8rem', left: '0rem',transform: 'translateX(-50%) rotate(-90deg)', bgcolor: 'white'}} aria-label="prev">
        <KeyboardArrowLeftIcon sx={{rotate: '90deg', color: 'black'}}/>
      </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
