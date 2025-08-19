import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
const OrderDetail = () => {
  return (
    <div className="lg:px-20 px-5">
      <div className="shadow-lg p-5">
        <h1 className="font-bold text-xl py-7">Delivery Address </h1>
        <AddressCard />
      </div>
      <div>
        <OrderTracker />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            size={{ xs: 12 }}
            className="shadow-xl rounded-md p-5"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item size={{ xs: 6 }}>
              <div className="flex items-center space-x-5">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={`/image1.png`}
                  alt=""
                />
                <div className="space-y-2">
                  <p className="font-semibold">2-Door Steel Almirah</p>
                  <p className="opacity-50 text-xs font-semibold">
                    Grey | Size: S | Stock: 10 units
                  </p>
                  <p className="font-semibold">₹2000</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  color: "violet-600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <p>Cancel Order</p>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetail;
