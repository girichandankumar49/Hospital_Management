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
import Diseases from "./Component/Swaroop/Chandan/Diseases";

import Doctor from "./Component/Swaroop/Vidhya/Doctor";
//  import Hospital from "./Component/Swaroop/Vidhya/Hospital";
import "./App.css";
import Location from "./Component/Swaroop/Vidhya/Location";
// import Hospital from "./Component/Swaroop/Vidhya/Hospital";

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
        

          <Route path="/Doctor" element={<Doctor />} />
          {/* <Route path="/Hospital" element={<Hospital />} />  */}
      
       
         <Route path="/Location" element={<Location />} />
         <Route path="/Center" element={<Center />} />
        <Route path="/Prevent" element={<Prevent />} />
        <Route path="/Diagnostic" element={<Diagnostic />} />
        <Route path="/Offer" element={<Offer />} />
         <Route path="/Healthcare" element={<Healthcare />} />
        
        <Route path="/Diseases" element={<Diseases />} />
          {/* Specialties Pages */}
         <Route path="/:category" element={<Specialties />} />
      </Routes>

      <Footer />
     </>
  );
}

export default App;