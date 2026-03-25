import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Filtering.css";
import DoctorData from "./DoctorData";
import specializationText from "./specializationText";

const Filtering = () => {
  const [specialization, setSpecialization] = useState("all");
  const [location, setLocation] = useState("all");

  const { specialization: paramSpec } = useParams();

  // ✅ Set specialization from URL
  useEffect(() => {
    if (paramSpec) {
      setSpecialization(paramSpec.toLowerCase());
    }
  }, [paramSpec]);

  // ✅ Single clean filter (case-insensitive)
  const filtered = DoctorData.filter((doc) => {
    return (
      (specialization === "all" ||
        doc.specialization.toLowerCase() === specialization.toLowerCase()) &&
      (location === "all" ||
        doc.city.toLowerCase() === location.toLowerCase())
    );
  });

  const specData = specializationText.find(
  (item) => item.name.toLowerCase() === specialization.toLowerCase()
);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">Home</div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-container">

          {/* ✅ lowercase values */}
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="all">All Specializations</option>
            <option value="cardiology">Cardiologists</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="dermatology">Dermatology</option>
            <option value="gynecology">Gynecology</option>
          </select>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="all">Select Location</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="warangal">Warangal</option>
            <option value="karimnagar">Karimnagar</option>
            <option value="nizamabad">Nizamabad</option>
            <option value="khammam">Khammam</option>
            <option value="visakhapatnam">Visakhapatnam</option>
            <option value="vijayawada">Vijayawada</option>
            <option value="guntur">Guntur</option>
            <option value="nellore">Nellore</option>
            <option value="tirupati">Tirupati</option>
          </select>

          <button type="button">🔍 Search</button>
        </div>
      </div>

      {/* Title */}
      <div className="title-container">
        <h1>
          {specialization === "all"
            ? "All Doctors"
            : `Best ${specialization} Doctors`}
        </h1>
      </div>

      {/* Main Content */}
      <div className="main-container">
        <div className="left-content">
          <div className="doctor-grid">
            {filtered.length > 0 ? (
              filtered.map((doc) => (
                <div key={doc.id} className="doctor-card">
                  <img src={doc.img} alt={doc.name} />
                  <h4>{doc.name}</h4>
                  <p>{doc.specialization}</p>
                  <p>{doc.city}</p>
                  <p>{doc.designation}</p>
                  <span className="exp">{doc.exp} yrs exp</span>
                  <p>⭐ {doc.rating} | {doc.patients} patients</p>
                  <button className="book-btn">
                    Book Appointment
                  </button>
                </div>
              ))
            ) : (
              <h3>No doctors found</h3>
            )}
          </div>
        </div>
        <div class="sidebar1">

<h3>Popular Searches</h3>

<ul>

<li>Best Cardiologists in Hyderabad</li>
<li>Best Cardiologists in Financial District</li>
<li>Best Cardiologists in Secunderabad</li>
<li>Best Cardiologists in Kakinada</li>
<li>Best Cardiologists in Kurnool</li>
<li>Best Cardiologists in Nashik</li>
<li>Best Cardiologists in Navi Mumbai</li>
<li>Best Cardiologists in Nellore</li>
<li>Best Cardiologists in Nizamabad</li>

</ul>

</div>
      </div>

      {/* Specialization Content */}
      <div className="specialization-content">
  {specialization !== "all" && specData && (
    <>
      <img
        src={specData.image}
        alt={specData.name}
        className="specialization-img"
      />

      <div
        dangerouslySetInnerHTML={{ __html: specData.content }}
      ></div>
    </>
  )}
</div>
    </div>
  );
};

export default Filtering;