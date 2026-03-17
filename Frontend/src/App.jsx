import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopHeader from "./Component/Swaroop/TopHeader";
import Navbar from "./component/swaroop/Navbar";
import Hero from "./component/swaroop/Hero";
import Excellence from "./component/swaroop/Excellence";
import About from "./component/swaroop/About";
import Footer from "./component/swaroop/Footer";
import Specialties from "./Component/Swaroop/Chandan/Specialties";
import Prevent from "./Component/Swaroop/Chandan/Prevent";
import Diagnostic from "./Component/Swaroop/Chandan/Diagnostic";
import Offer from "./Component/Swaroop/Chandan/Offer";
import "./App.css";

function App() {
  return (
      <>
      <TopHeader />
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Excellence />
              <About />
            </>
          }
        />

        {/* Specialties Pages */}
        <Route path="/:category" element={<Specialties />} />
       
        <Route path="/Prevent" element={<Prevent />} />
        <Route path="/Diagnostic" element={<Diagnostic />} />
        <Route path="/Offer" element={<Offer />} />
       
        
      </Routes>

      <Footer />
     </>
  );
}

export default App;