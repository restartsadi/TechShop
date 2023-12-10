import { NavBar } from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
import HomePage from "./Pages/Homepage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { Services } from "./Pages/Services/Services";
import { Products } from "./Pages/Products/Products";
// import Users from "./Users";
import { UserProvider } from "./Provider/UserProvider";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="container">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        {/* <Users /> */}
        <Footer />
      </UserProvider>
    </div>
  );
}
