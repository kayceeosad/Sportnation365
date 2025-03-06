import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Hearder from "./Pages/Hearder/Hearder";
import Hero from "./Pages/Hearder/Homepage/Hero/Hero";
import Aboutus from "./Pages/Hearder/Homepage/Aboutus/Aboutus";
import Event from "./Pages/Hearder/Homepage/Event/Event";
import Programmes from "./Pages/Hearder/Homepage/Programmes/Programmes";
import Footer from "./Pages/Hearder/Footer/Footer";
import Homescreen from "./Pages/Hearder/Homepage/Hero/Homescreen";
import Aboutdt from "./Pages/Hearder/Aboutdt/Aboutdt";
import Programmedetails from "./Pages/Hearder/Programmedetails/Programmedetails";
import Gallery from "./Pages/Hearder/Gallery/Gallery";
import Eventsec from "./Pages/Hearder/Eventsec/Eventsec";
import Contactus from "./Pages/Hearder/Contactus/Contactus";
import { Registration } from "./Pages/Registration/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/Aboutdt" element={<Aboutdt />} />
        <Route path="/Programmedetails" element={<Programmedetails />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Eventsec" element={<Eventsec />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
