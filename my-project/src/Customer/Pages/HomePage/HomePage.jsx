import React from "react";
import MainCarousel from "../../Components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-12">
        <HomeSectionCarousel SectionName={"Furniture"} />
        <HomeSectionCarousel SectionName={"Storage Solutions"} />
        <HomeSectionCarousel SectionName={"Office Furniture"} />
        <HomeSectionCarousel SectionName={"Racks & Retail Units"} />
        <HomeSectionCarousel SectionName={"Gates & Railings"} />
        <HomeSectionCarousel SectionName={"Outdoor Lighting Fixtures"} />
      </div>
    </div>
  );
};
export default HomePage;