import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/containers/Header/Header.jsx";
import Footer from "./Components/containers/Footer/Footer.jsx";
import Hero from "./Components/containers/Hero/Hero.jsx";
import Login from "./Components/Pages/Login/Login.jsx";
import Register from "./Components/Pages/Register/Register.jsx";
import Homepage from "./Components/containers/HomePage/Homepage.jsx";
import Specialty from "./Components/Pages/Specialty/specialty.jsx";
import MedicalFacility from "./Components/Pages/MedicalFacility/MedicalFacility.jsx";
import DoctorList from "./Components/Pages/Doctorlist/Doctorlist.jsx";
function App() {
  return (
    <Router>
      {/* Header sẽ luôn hiển thị */}
      <Header />

      {/* Routes điều khiển hiển thị nội dung động */}
      <Routes>
        {/* Trang chủ ("/") sẽ hiển thị Hero và Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Homepage />
            </>
          }
        />
        {/* Trang đăng nhập */}
        <Route path="/Dangnhap" element={<Login />} />
        {/* Trang đăng ký */}
        <Route path="/Dangky" element={<Register />} />
        {/* Trang nội dung */}
        <Route path="/chuyenkhoa/:id" element={<Specialty />} />
        <Route path="/Cosoyte/:id" element={<MedicalFacility />} />
        <Route path="/danhsachbacsi/:id" element={<DoctorList />} />
      </Routes>

      {/* Footer sẽ luôn hiển thị */}
      <Footer />
    </Router>
  );
}

export default App;
