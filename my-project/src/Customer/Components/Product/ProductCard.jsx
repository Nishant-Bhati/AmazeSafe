import React from "react";
import "./ProductCard.css";

const ProductCard = ({product}) => {
    return (
        <div className="ProductCard w-[15rem] m-3 transition-all cursor-pointer">
            <div className="h-[20rem]">
                <img className="h-full w-full object-cover object-left-top " src={product.image} alt="" />
            </div>
            <div className="textpart bg-white p-3">
                <div>
                    <p className="font-medium ">{product.title}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="font-semibold">₹{product.discountedPrice}</p>
                    <p className="line-through opacity-50">₹{product.price}</p>
                    <p className="text-green-500 font-semibold">{product.discountPercent}% off</p>
                </div>
            </div>
            
        </div>
    );
};
export default ProductCard;
