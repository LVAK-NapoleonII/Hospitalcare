import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is not valid";
    if (!formData.password) tempErrors.password = "Password is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle login logic here
      console.log("Login successful", formData);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Đăng Nhập
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              fullWidth
              id="email"
              label="Địa chỉ Email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Đăng Nhập
          </Button>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link href="/forgot-password" variant="body2">
              Quên mật khẩu?
            </Link>
          </Box>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link href="/register" variant="body2">
              Bạn chưa có tài khoản? Đăng ký
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
