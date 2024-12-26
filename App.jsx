import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./src/component/Navbar.jsx";
import Banner from "./src/component/banner/Banner.jsx";
import Hero from "./src/component/hero/hero.jsx";
import About from "./src/component/About/About.jsx";
import WhyChoose from "./src/component/WhyChoose/WhyChoose.jsx";
import Footer from "./src/component/Footer/Footer.jsx";
import Popup from "./src/component/popup/popup.jsx";
import DashboardAdmin from "./src/component/Dashboard/DashboardAdmin.jsx";
import AdminAccount from "./src/component/AdminAccount/Adminakun.jsx";
import EditTable from "./src/component/EditTable/EditTable.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryButton from "./src/component/Shared/PrimaryButton.jsx";

const App = () => {
  const [showPopup, setshowPopup] = useState(false);

  // Handle popup show/hide
  const handlePopup = () => {
    setshowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Navbar handlePopup={handlePopup} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Dashbord" element={<DashboardAdmin />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/about" element={<About handlePopup={handlePopup} />} />
          <Route path="/why-choose" element={<WhyChoose />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/PrimaryButton" element={<PrimaryButton />} />
          <Route path="/Adminakun" element={<AdminAccount />} />
          <Route path="/edit/:id" element={<EditTable />} />
        </Routes>
        <Footer />
        <Popup showPopup={showPopup} setshowPopup={setshowPopup} />
        {/* Example trigger for popup */}
        <button onClick={handlePopup}>Show Popup</button>
      </div>
    </BrowserRouter>
  );
};

export default App;
