import React from "react";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="image1.png"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">2-Door Steel Almirah</p>
          <p className="text-xs opacity-50">Grey | Size: S | Stock: 10 units</p>
          <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-1.5">
            <p className="text-sm font-semibold">Offer Price: ₹20000</p>
            <p className="text-sm text-green-600 font-semibold">20% off</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm mr-2">MRP:</span>
            <p className="text-sm font-bold line-through opacity-50">₹25000</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "#4f46e5" }}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">1</span>
          <IconButton sx={{ color: "#4f46e5" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "#4f46e5" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
