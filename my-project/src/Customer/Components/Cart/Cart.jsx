import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
        {[1,1,1,1].map((item)=>(<CartItem />))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="shadow-lg rounded-md">
            <p className="uppercase font-bold opacity-50 pb-4">Price Details</p>
            <hr />
            <div className=" space-y-3 font-semibold ">
              <div className=" flex justify-between pt-3 text-black">
                <p>Subtotal</p>
                <p>₹20000</p>
              </div>
              <div className=" flex justify-between pt-3 text-black">
                <p>Discount</p>
                <p className="text-green-600">-₹2000</p>
              </div>
              <div className=" flex justify-between pt-3 text-black">
                <p>Delivery Charges</p>
                <p className="text-green-600">₹200</p>
              </div>
              <div className="font-bold flex justify-between pt-3 text-black">
                <p>Total</p>
                <p className="text-green-600">₹18200</p>
              </div>
            </div>
            <button  className="w-full mt-5 bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
