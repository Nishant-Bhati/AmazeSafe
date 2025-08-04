import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Grid, Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";


const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);
    const address = {
      firstname: data.get("firstName"),
      lastname: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      pincode: data.get("pincode"),
      phoneNumber: data.get("phoneNumber"),
    }
    console.log("Form submitted",address);
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, lg: 5 }}
          className=" border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "violet-600", color: "white" }}
              size="large"
              variant="contained"
            >
              DELIVER HERE
            </Button>
          </div>
        </Grid>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    label="First Name"
                    name="firstName"
                    id="firstName"
                    fullWidth
                    autoComplete="Given-Name"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    label="Last Name"
                    name="lastName"
                    id="lastName"
                    fullWidth
                    autoComplete="Given-Name"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    label="Address"
                    name="address"
                    id="address"
                    fullWidth
                    autoComplete="Given-Name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    label="City"
                    name="city"
                    id="city"
                    fullWidth
                    autoComplete="Shipping-City"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    label="State"
                    name="state"
                    id="state"
                    fullWidth
                    autoComplete="Shipping-State"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    label="Pincode"
                    name="pincode"
                    id="pincode"
                    fullWidth
                    autoComplete="Shipping-Pincode"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    label="Phone Number"
                    name="phoneNumber"
                    id="phoneNumber"
                    fullWidth
                    autoComplete="Given-Name"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Button
                    sx={{ mt: 2, bgcolor: "violet-600", color: "white" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    DELIVER HERE
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default DeliveryAddressForm;
