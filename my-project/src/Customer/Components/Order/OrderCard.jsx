import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from "@mui/icons-material/Adjust";


const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-black hover:shadow-xl cursor-pointer'>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item size={{ xs: 6, lg: 3 }}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="image1.png"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>2-Door Steel Almirah</p>
              <p className=" opacity-50 text-xs font-semibold">
                Grey | Size: S | Stock: 10 units
              </p>
            </div>
          </div>
        </Grid>
        <Grid item size={{ xs: 2 }}>
          <p>₹2000</p>
        </Grid>
        <Grid item size={{ xs: 4 }}>
          {false && (
            <p>
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-violet-600 mr-2 text-sm"
              />
              <span className="font-semibold">
                Expected Delivery on 25 Aug 2025
              </span>
            </p>
          )}
          {true && <div>
            <p>
            <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 mr-2 text-sm"
              />
              <span className="font-semibold">Delivered on 25 Aug 2025</span>
            </p>
            <p className='text-xs ml-1'>Your order has been delivered</p>
          </div> }
        </Grid>
      </Grid>
    </div>
  );
}
export default OrderCard