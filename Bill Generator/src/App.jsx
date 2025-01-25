import { Route, Routes } from "react-router-dom";
import FuelBill from "./Components/FuelBill/FuelBill";
import Template1 from "./Components/FuelBill/Templates/template1";
import Template2 from "./Components/FuelBill/Templates/template2";
import Template3 from "./Components/FuelBill/Templates/template3";
import Template4 from "./Components/FuelBill/Templates/template4";
import Navbar from "./Components/HomePage/Navbar";
import MainSection from "./Components/Main/MainSection";
import Hero from "./Components/HomePage/Hero";
import Contact from "./Components/HomePage/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/bills/:billType" element={<MainSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
