import SpecialtySection from "./Specialty/Specialty";
import Medicalfacility from "./Medicalfacility/Medicalfacility";
import Doctors from "./Doctors/Doctors";

function Homepage() {
  return (
    <div>
      <SpecialtySection />
      <Medicalfacility />
      <Doctors />
    </div>
  );
}

export default Homepage;
