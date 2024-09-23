import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import InventoryIcon from "@mui/icons-material/Inventory";
import BiotechIcon from "@mui/icons-material/Biotech";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const settings = [
    "Trang cá nhân",
    "lịch sử đặt lịch",
    "Danh sách lịch đã đặt",
    "đăng nhập",
    "Đăng ký",
    "đăng xuất",
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);

    // thiết lập chức năng trỏ đến trang trong avatar
    switch (setting) {
      case "đăng nhập":
        navigate("/Dangnhap");
        break;
      case "Đăng ký":
        navigate("/Dangky");
        break;
      case "đăng xuất":
        navigate("/");
        break;
      default:
        break;
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        width: "99vw",
        display: "flex",
        alightItem: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#007BFF" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Menu Icon for Mobile View */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Logo and Title */}
            <MenuIcon />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "Bold", cursor: "pointer" }}
              onClick={() => handleNavigation("/")}
            >
              BookingCare
            </Typography>
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex" }}>
            <Button
              color="inherit"
              sx={{ mx: 1 }}
              startIcon={<BiotechIcon />}
              onClick={() => handleNavigation("/chuyennganh/:id")}
            >
              Chuyên Khoa
            </Button>
            <Button
              color="inherit"
              sx={{ mx: 1 }}
              startIcon={<LocalHospitalIcon />}
            >
              Cơ sở y tế
            </Button>
            <Button
              color="inherit"
              sx={{ mx: 1 }}
              startIcon={<HealthAndSafetyIcon />}
            >
              Bác sĩ
            </Button>
            <Button
              color="inherit"
              sx={{ mx: 1 }}
              startIcon={<InventoryIcon />}
            >
              Gói Khám
            </Button>
          </Box>

          {/* Authentication Buttons */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => handleCloseUserMenu(null)}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
