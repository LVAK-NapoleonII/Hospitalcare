import { Container, Typography, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#f1f1f1", py: 4 }}>
      <Container>
        <Typography variant="body1" align="center" sx={{ mb: 2 }}>
          © 2024 BookingCare. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="#" underline="none" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          |
          <Link href="#" underline="none" color="inherit" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
