import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Cart from '../Cart/Cart'
const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard />
      </div>
      <div className="mt-15">
        <Cart />
      </div>
    </div>
  );
}

export default OrderSummary