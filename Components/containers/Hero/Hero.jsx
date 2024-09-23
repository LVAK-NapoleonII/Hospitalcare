import { Typography, Button, Box } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "60vh",
        width: "99vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('src/assets/header-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h2" component="div" sx={{ color: "white", mb: 2 }}>
        Welcome to BookingCare
      </Typography>
      <Typography variant="h5" component="div" sx={{ color: "white", mb: 4 }}>
        Your Health, Our Priority
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Book an Appointment
      </Button>
    </Box>
  );
};

export default HeroSection;
