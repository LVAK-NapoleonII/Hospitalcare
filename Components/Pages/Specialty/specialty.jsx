import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import FaceIcon from "@mui/icons-material/Face";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HearingIcon from "@mui/icons-material/Hearing";

export default function SpecialityList() {
  const specialities = [
    {
      icon: <MedicalServicesIcon />,
      name: "Cơ Xương Khớp",
    },
    {
      icon: <FaceIcon />,
      name: "Tâm thần",
    },
    {
      icon: <LocalHospitalIcon />,
      name: "Tiêu hóa",
    },
    {
      icon: <FavoriteIcon />,
      name: "Tim mạch",
    },
    {
      icon: <HearingIcon />,
      name: "Tai Mũi Họng",
    },
  ];

  return (
    <List>
      {specialities.map((speciality) => (
        <ListItem button key={speciality.name}>
          <ListItemIcon>{speciality.icon}</ListItemIcon>
          <ListItemText primary={speciality.name} />
        </ListItem>
      ))}
    </List>
  );
}
