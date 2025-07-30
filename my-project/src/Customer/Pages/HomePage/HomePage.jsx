import React from "react";
import MainCarousel from "../../Components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";
import { almirah } from "/src/Data/almirah";
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-12">
        <HomeSectionCarousel data={almirah} SectionName={"Furniture"} />
        <HomeSectionCarousel data={almirah} SectionName={"Storage Solutions"} />
        <HomeSectionCarousel data={almirah} SectionName={"Office Furniture"} />
        <HomeSectionCarousel data={almirah} SectionName={"Racks & Retail Units"} />
        <HomeSectionCarousel data={almirah} SectionName={"Gates & Railings"} />
        <HomeSectionCarousel data={almirah} SectionName={"Outdoor Lighting Fixtures"} />
      </div>
    </div>
  );
};
export default HomePage;