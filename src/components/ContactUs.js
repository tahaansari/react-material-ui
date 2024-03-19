import React from "react";
import { Typography, TextField } from "@mui/material";

const ContactUs = () => {
  return (
    <>
      <Typography className="text-5xl font-bold underline" variant="h4" mb={2}>
        Contact Us-
      </Typography>
      <TextField type="text" label="FirstName" variant="outlined" sx={{ mt: 2, width: "300px" }} />
      <TextField type="text" label="LastName" variant="outlined" sx={{ mt: 2, width: "300px" }} />
      <TextField type="text" label="Phone Number" variant="outlined" sx={{ mt: 2, width: "300px" }} />
      <TextField type="text" label="Message" variant="outlined" multiline rows={2} sx={{ mt: 2, width: "300px" }} />
    </>
  );
};

export default ContactUs;
