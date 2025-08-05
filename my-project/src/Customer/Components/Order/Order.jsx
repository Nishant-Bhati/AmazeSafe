import React from "react";
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";
const orderStatus = [
  {
    label: "On the way",
    value: "onTheWay",
  },
  {
    label: "Delivered",
    value: "delivered",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
  {
    label: "Pending",
    value: "pending",
  },
];

const Order = () => {
  return (
    <div className="px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item size={{ xs: 2.5 }}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status</h1>
              {orderStatus.map((Option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={Option.value}
                    type="checkbox"
                    className="w-4 h-4 border-grey-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 text-sm text-gray-600" htmlFor="">
                    {Option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item size={{ xs: 9 }}>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
