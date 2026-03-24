import React from 'react'
import "./Doctor.css"
const Doctor = () => {

    document.addEventListener("DOMContentLoaded", function () {

  fetch("Header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    /* attach dropdown AFTER header loads */
     const toggle = document.querySelector(".hospital-toggle");
     const dropdown = document.querySelector(".hospital-dropdown");
    if (toggle && dropdown) {
      toggle.addEventListener("click", function (e) {
         e.stopPropagation();
         dropdown.classList.toggle("active");
      });

      document.addEventListener("click", function () {
        dropdown.classList.remove("active");
     });
     }

   });

   fetch("Footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

 });
  return (
    <div>
      <div id="header"></div>

{/* <!-- BREADCRUMB --> */}
<div class="breadcrumb" id="breadcrumb">
  Home / Doctors
</div>
<div id="doctorProfile" style={{ display: 'none' }}></div>

{/* <!-- PAGE HEADER --> */}
<div class="header">

  <h1>Doctor Specialities | Centers of Excellence</h1>

  <p>
    At Medicover Hospitals, we have a team of highly skilled specialists. Our expert doctors are dedicated to providing the best and top quality medical care. From heart health to bone care, women's health to child care, our doctors make sure you receive the right treatment at the right time.
  </p>

</div>
{/* <!-- section title --> */}

<h2 class="doctor-title">Our Specialist Doctors</h2>

{/* <!-- search bar --> */}

<div class="search-wrapper">
  <div class="search-bar-container">

    <span class="search-text">
      Search Doctors by <span id="searchWord">Procedures</span>
    </span>

    <input type="text" id="searchInput"/>

    <span class="search-icon">🔍</span>

  </div>
</div>


{/* <!-- main layout --> */}

<div class="doctor-page">
<div class="sidebar">

<h3>Specialities</h3>

<div class="sidebar-search">
<span class="sidebar-search-icon">🔍</span>
<input type="text" placeholder="Search Specialty"/>
</div>
{/* <!-- SIDEBAR --> */}


<label><input type="checkbox" class="spec-filter" value="Cardiology"/> Cardiology</label>
<label><input type="checkbox" class="spec-filter" value="Neurology"/> Neurology</label>
<label><input type="checkbox" class="spec-filter" value="Orthopedics"/> Orthopedics</label>
<label><input type="checkbox" class="spec-filter" value="Gynecology"/> Gynecology</label>
<label><input type="checkbox" class="spec-filter" value="Dermatology"/> Dermatology</label>




<h3>Treatments</h3>
<h3>Select City</h3>

<label><input type="checkbox" class="city-filter" value="Hyderabad"/> Hyderabad</label>
<label><input type="checkbox" class="city-filter" value="Warangal"/> Warangal</label>
<label><input type="checkbox" class="city-filter" value="Karimnagar"/> Karimnagar</label>
<label><input type="checkbox" class="city-filter" value="Nizamabad"/> Nizamabad</label>
<label><input type="checkbox" class="city-filter" value="Khammam"/> Khammam</label>

<label><input type="checkbox" class="city-filter" value="Visakhapatnam"/> Visakhapatnam</label>
<label><input type="checkbox" class="city-filter" value="Vijayawada"/> Vijayawada</label>
<label><input type="checkbox" class="city-filter" value="Guntur"/> Guntur</label>
<label><input type="checkbox" class="city-filter" value="Nellore"/> Nellore</label>
<label><input type="checkbox" class="city-filter" value="Tirupati"/> Tirupati</label>


<h3>Gender</h3>


<label><input type="radio" name="gender" class="gender-filter" value="Male"/> Male</label>
<label><input type="radio" name="gender" class="gender-filter" value="Female"/> Female</label>
<input type="radio" name="gender" class="gender-filter" value="" checked={true} readOnly /> All

<h3>Language</h3>

<label><input type="checkbox" class="language-filter" value="English"/> English</label>
<label><input type="checkbox" class="language-filter" value="Telugu"/> Telugu</label>
<label><input type="checkbox" class="language-filter" value="Hindi"/> Hindi</label>
<label><input type="checkbox" class="language-filter" value="Tamil"/> Tamil</label>
<label><input type="checkbox" class="language-filter" value="Kannada"/> Kannada</label>


<h3>Symptoms</h3>

<label><input type="checkbox" class="symptom-filter" value="Chest Pain"/> Chest Pain</label>
<label><input type="checkbox" class="symptom-filter" value="Headache"/> Headache</label>
<label><input type="checkbox" class="symptom-filter" value="Fever"/> Fever</label>
<label><input type="checkbox" class="symptom-filter" value="Back Pain"/> Back Pain</label>
<label><input type="checkbox" class="symptom-filter" value="Joint Pain"/> Joint Pain</label>
<label><input type="checkbox" class="symptom-filter" value="Anxiety"/> Anxiety</label>
<label><input type="checkbox" class="symptom-filter" value="Migraine"/> Migraine</label>
<label><input type="checkbox" class="symptom-filter" value="Hair Loss"/> Hair Loss</label>
<label><input type="checkbox" class="symptom-filter" value="Skin Allergy"/> Skin Allergy</label>
<label><input type="checkbox" class="symptom-filter" value="Dizziness"/> Dizziness</label>


<h3>Conditions</h3>

<label><input type="checkbox" class="condition-filter" value="Diabetes"/> Diabetes</label>
<label><input type="checkbox" class="condition-filter" value="Arthritis"/> Arthritis</label>
<label><input type="checkbox" class="condition-filter" value="Hypertension"/> Hypertension</label>
<label><input type="checkbox" class="condition-filter" value="Asthma"/> Asthma</label>
<label><input type="checkbox" class="condition-filter" value="Cancer"/> Cancer</label>
<label><input type="checkbox" class="condition-filter" value="Kidney Disease"/> Kidney Disease</label>
<label><input type="checkbox" class="condition-filter" value="Stroke"/> Stroke</label>
<label><input type="checkbox" class="condition-filter" value="Thyroid"/> Thyroid</label>
<label><input type="checkbox" class="condition-filter" value="Obesity"/> Obesity</label>
<label><input type="checkbox" class="condition-filter" value="Heart Disease"/> Heart Disease</label>


<h3>Treatments</h3>

<label><input type="checkbox" class="treatment-filter" value="Angioplasty"/> Angioplasty</label>
<label><input type="checkbox" class="treatment-filter" value="Knee Replacement"/> Knee Replacement</label>
<label><input type="checkbox" class="treatment-filter" value="Skin Laser"/> Skin Laser</label>
<label><input type="checkbox" class="treatment-filter" value="IVF"/> IVF</label>
<label><input type="checkbox" class="treatment-filter" value="Brain Surgery"/> Brain Surgery</label>
<label><input type="checkbox" class="treatment-filter" value="Cataract Surgery"/> Cataract Surgery</label>
<label><input type="checkbox" class="treatment-filter" value="Dialysis"/> Dialysis</label>
<label><input type="checkbox" class="treatment-filter" value="Chemotherapy"/> Chemotherapy</label>
<label><input type="checkbox" class="treatment-filter" value="Physiotherapy"/> Physiotherapy</label>
<label><input type="checkbox" class="treatment-filter" value="Heart Surgery"/> Heart Surgery</label>


<h3>Procedures</h3>

<label><input type="checkbox" class="procedure-filter" value="ACL Tear"/> ACL Tear</label>
<label><input type="checkbox" class="procedure-filter" value="Knee Surgery"/> Knee Surgery</label>
<label><input type="checkbox" class="procedure-filter" value="Angiogram"/> Angiogram</label>
<label><input type="checkbox" class="procedure-filter" value="Heart Bypass"/> Heart Bypass</label>
<label><input type="checkbox" class="procedure-filter" value="Joint Replacement"/> Joint Replacement</label>
<label><input type="checkbox" class="procedure-filter" value="Kidney Transplant"/> Kidney Transplant</label>
<label><input type="checkbox" class="procedure-filter" value="Liver Surgery"/> Liver Surgery</label>
<label><input type="checkbox" class="procedure-filter" value="Tumor Removal"/> Tumor Removal</label>
<label><input type="checkbox" class="procedure-filter" value="Spine Surgery"/> Spine Surgery</label>
<label><input type="checkbox" class="procedure-filter" value="Brain Scan"/> Brain Scan</label>


<button id="resetFilters">Reset All Filters</button>

</div>

{/* <!-- RIGHT SIDE DOCTORS --> */}

<div class="doctor-content">
    


<div id="doctorGrid" class="doctor-grid"></div>

<div id="pagination" class="pagination"></div>
 

</div>

</div>

<section class="why-section">

<h2>Why Choose Our Specialists?</h2>

<div class="why-grid">

<div class="why-card">
<div class="icon">👨‍⚕️</div>
<p>Experienced Doctors</p>
</div>

<div class="why-card">
<div class="icon">💻</div>
<p>Advanced Facilities</p>
</div>

<div class="why-card">
<div class="icon">📅</div>
<p>Personalized Care</p>
</div>

<div class="why-card">
<div class="icon">🛡️</div>
<p>Comprehensive Services</p>
</div>

<div class="why-card">
<div class="icon">⏱️</div>
<p>24/7 Emergency</p>
</div>

</div>

</section>



<section class="steps-section">

<h2>Three Easy Steps to Book a Doctor Appointment</h2>

<div class="steps-grid">

<div class="step-card">

<div class="step-icon">👨‍⚕️</div>

<h3>Choose Your Specialty</h3>

<p>Select the medical specialty that fits your needs</p>

</div>



<div class="step-card">

<div class="step-icon">📅</div>

<h3>Select a Doctor & Time Slot</h3>

<p>Browse expert profiles and pick a convenient appointment time</p>

</div>



<div class="step-card">

<div class="step-icon">📄</div>

<h3>Confirm & Visit</h3>

<p>Receive instant confirmation and visit the hospital as scheduled</p>

</div>

</div>

</section>

<section class="info-section">

<h2>Why Patients Trust Our Doctors</h2>

<div class="info-grid">

<div class="info-card">
<h3>👨‍⚕️ Expert Specialists</h3>
<p>Highly experienced doctors with decades of clinical expertise.</p>
</div>

<div class="info-card">
<h3>🏥 Advanced Technology</h3>
<p>Modern medical equipment and world-class diagnostic facilities.</p>
</div>

<div class="info-card">
<h3>❤️ Patient-Centered Care</h3>
<p>Every treatment plan is personalized for each patient.</p>
</div>

<div class="info-card">
<h3>⏱ Quick Appointments</h3>
<p>Book consultations easily and avoid long waiting times.</p>
</div>

</div>

</section>

<section class="services">

<h2>Our Other Medical Services</h2>

<div class="service-container">

<div class="card">
<img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"/>

<div class="overlay">
Family Card – Get Discounts & Benefits
</div>
</div>


<div class="card">
<img src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80"/>

<div class="overlay">
Preventive Health Check-ups
</div>
</div>


<div class="card">
<img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80"/>

<div class="overlay">
Diagnostics & Pathology Tests
</div>
</div>

</div>

</section>

<section class="hospitals-section">

<h2>Our Hospitals</h2>

<div class="hospital-container">

<div class="hospital-card">
<img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop"/>
<div class="hospital-overlay">
<h3>Hyderabad</h3>
</div>
</div>

<div class="hospital-card">
<img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"/>
<div class="hospital-overlay">
<h3>Bengaluru</h3>
</div>
</div>

<div class="hospital-card">
<img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"/>
<div class="hospital-overlay">
<h3>Pune</h3>
</div>
</div>

<div class="hospital-card">
<img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"/>
<div class="hospital-overlay">
<h3>Navi Mumbai</h3>
</div>
</div>

</div>

</section>
<div id="footer"></div>



{/* <script src="DoctorsData.js"></script>
<script src="doctors.js"></script> */}

{/* <script>
document.addEventListener("DOMContentLoaded", function () {

  fetch("Header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    /* attach dropdown AFTER header loads */}
{/* //     const toggle = document.querySelector(".hospital-toggle");
//     const dropdown = document.querySelector(".hospital-dropdown");

//     if (toggle && dropdown) {
//       toggle.addEventListener("click", function (e) {
//         e.stopPropagation();
//         dropdown.classList.toggle("active");
//       });

//       document.addEventListener("click", function () {
//         dropdown.classList.remove("active");
//       });
//     }

//   });

//   fetch("Footer.html")
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById("footer").innerHTML = data;
//   });

// });
// </script>  */}
    </div>
  )
}

export default Doctor
