import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopHeader from "./Component/Swaroop/TopHeader";
import Navbar from "./Component/Swaroop/Navbar";
import Hero from "./Component/Swaroop/Hero";
import Excellence from "./Component/Swaroop/Excellence";
import About from "./component/swaroop/About";
import Footer from "./Component/Swaroop/Footer";
import Specialties from "./Component/Swaroop/Chandan/Specialties";
import Prevent from "./Component/Swaroop/Chandan/Prevent";
import Diagnostic from "./Component/Swaroop/Chandan/Diagnostic";
import Offer from "./Component/Swaroop/Chandan/Offer";
import Healthcare from "./Component/Swaroop/Chandan/Healthcare";
import Center from "./Component/Swaroop/Chandan/Center";
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
       
         <Route path="/Center" element={<Center />} />
        <Route path="/Prevent" element={<Prevent />} />
        <Route path="/Diagnostic" element={<Diagnostic />} />
        <Route path="/Offer" element={<Offer />} />
         <Route path="/Healthcare" element={<Healthcare />} />
        
      </Routes>

      <Footer />
     </>
  );
}

export default App;