import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({product}) => {
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer bg-white flex flex-col rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={`/${product.image}`} 
          alt="Product"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">
          {product.title}
        </h3>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{product.price}</p>
          <p className="text-green-500 font-semibold">{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
