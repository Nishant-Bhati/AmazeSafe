import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer bg-white flex flex-col rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="/image1.png"
          alt="Product"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">
          Slimline 2 Door Steel Almirah
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          4 Shelves, Royal Ivory Color
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
