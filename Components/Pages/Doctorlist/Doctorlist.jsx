import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Container,
} from "@mui/material";

const doctors = [
  {
    id: 1,
    name: "Bác sĩ Chuyên khoa II Nguyễn Tiến Thành",
    specialty: "Da liễu,Da liễu thẩm mỹ",
    image: "/path-to-nguyen-tien-thanh.jpg",
  },
  {
    id: 2,
    name: "TTUT. BSCKII Trần Nhựt Thị Ánh Phượng",
    specialty: "Tiêu hoá,Bệnh Viêm gan",
    image: "/path-to-tran-nhut-thi-anh-phuong.jpg",
  },
  {
    id: 3,
    name: "Bác sĩ Chuyên khoa II Đoàn Tiến Thành",
    specialty: "Tai Mũi Họng",
    image: "/path-to-doan-tien-thanh.jpg",
  },
  {
    id: 4,
    name: "Tiến sĩ, Bác sĩ Nguyễn Văn Doanh",
    specialty: "Thần kinh",
    image: "/path-to-nguyen-van-doanh.jpg",
  },
];

const DoctorList = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Bác sĩ nổi bật
      </Typography>
      <List>
        {doctors.map((doctor, index) => (
          <React.Fragment key={doctor.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={doctor.name}
                  src={doctor.image}
                  sx={{ width: 80, height: 80, marginRight: 2 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" component="div">
                    {doctor.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                  >
                    {doctor.specialty}
                  </Typography>
                }
              />
            </ListItem>
            {index < doctors.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default DoctorList;
