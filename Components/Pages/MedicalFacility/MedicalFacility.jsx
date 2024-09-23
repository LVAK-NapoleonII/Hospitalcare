import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
} from "@mui/material";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const facilities = [
  {
    id: 1,
    name: "Bệnh viện Đa khoa An Việt",
    image: "/path-to-an-viet-logo.png",
  },
  {
    id: 2,
    name: "Phòng Khám ACC - Chiropractic Quận 1 TP.HCM",
    image: "/path-to-acc-logo.png",
  },
  {
    id: 3,
    name: "Phòng khám Chuyên khoa Nội An Phước",
    image: "/path-to-an-phuoc-logo.png",
  },
  {
    id: 4,
    name: "AesLatek by Dr Nghi - phòng khám da liễu và phẫu thuật thẩm mỹ",
    image: "/path-to-aeslatek-logo.png",
  },
];

const MedicalFacilitiesPage = () => {
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Cơ sở y tế
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Select value="Tỉnh thành" sx={{ minWidth: 120 }}>
          <MenuItem value="Tỉnh thành">Tỉnh thành</MenuItem>
        </Select>
        <TextField
          placeholder="Tìm kiếm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
        {alphabet.map((letter) => (
          <Button
            key={letter}
            variant={selectedLetter === letter ? "contained" : "outlined"}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </Button>
        ))}
      </Box>

      <Grid container spacing={3}>
        {facilities.map((facility) => (
          <Grid item xs={12} sm={6} md={3} key={facility.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={facility.image}
                alt={facility.name}
              />
              <CardContent>
                <Typography variant="body2">{facility.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MedicalFacilitiesPage;
