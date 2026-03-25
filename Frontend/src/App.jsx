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
import Filtering from "./Component/Swaroop/Vidhya/Filtering";
import Hospital from "./Component/Swaroop/Vidhya/Hospital";
import AboutUs from "./Component/Swaroop/Vidhya/AboutUs";
import Privacy from "./Component/Swaroop/Vidhya/Privacy";
import Success from "./Component/Swaroop/Chandan/Success";
import Blog from "./Component/Swaroop/Vidhya/Blog";

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
          <Route path="/Hospital" element={<Hospital />} /> 
      
       <Route path="/doctors/:specialization" element={<Filtering />} />
         <Route path="/Location" element={<Location />} />
         <Route path="/Center" element={<Center />} />
        <Route path="/Prevent" element={<Prevent />} />
        <Route path="/Diagnostic" element={<Diagnostic />} />
        <Route path="/Offer" element={<Offer />} />
         <Route path="/Healthcare" element={<Healthcare />} />
        <Route path="/Filtering" element={<Filtering />} />
        <Route path="/Diseases" element={<Diseases />} />
          {/* Specialties Pages */}
         <Route path="/:category" element={<Specialties />} />
         <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Success" element={<Success />} />
           <Route path="/Blog" element={<Blog />} />
      </Routes>

      <Footer />
     </>
  );
}

export default App;