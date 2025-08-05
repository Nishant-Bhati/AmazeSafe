import React from 'react'
import { Stepper,Step,StepLabel } from '@mui/material'
const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
]
const OrderTracker = () => {
    const activeStep = 1;
  return (
    <div className='w-full mt-10'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>        
    </div>
  )
}

export default OrderTracker