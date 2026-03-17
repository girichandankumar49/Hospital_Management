import React from "react";
import "./Consultation.css";

const Consultation = ({ data }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let location = document.getElementById("location").value;
    let specialty = document.getElementById("specialty").value;
    let consultation = document.getElementById("consultation").value;
    let agree = document.getElementById("agree").checked;

    let namePattern = /^[A-Za-z ]{3,}$/;
    let mobilePattern = /^[6-9][0-9]{9}$/;

    document.querySelectorAll(".error").forEach((e) => (e.innerHTML = ""));

    if (!namePattern.test(name)) {
      document.getElementById("nameError").innerHTML =
        "Enter valid name (letters only)";
      valid = false;
    }

    if (!mobilePattern.test(mobile)) {
      document.getElementById("mobileError").innerHTML =
        "Enter valid 10 digit mobile number";
      valid = false;
    }

    if (location === "") {
      document.getElementById("locationError").innerHTML =
        "Please select location";
      valid = false;
    }

    if (specialty === "") {
      document.getElementById("specialtyError").innerHTML =
        "Please select specialty";
      valid = false;
    }

    if (consultation === "") {
      document.getElementById("consultError").innerHTML =
        "Please select consultation type";
      valid = false;
    }

    if (!agree) {
      document.getElementById("checkError").innerHTML =
        "You must agree to the privacy policy";
      valid = false;
    }

    if (valid) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div>
      <div className="hero">

        {/* LEFT SIDE */}
        <div className="left">
          <h1>{data.title1} Hospital in India</h1>

          <p>{data.para1}</p>

          <div className="buttons">
            <button className="btn-orange">Book Instant Consultation</button>

            <button className="btn-gray">
              <i className="fa-solid fa-phone"></i>
              Call 040 68334455
            </button>
          </div>

          <div className="stats">
            <div className="card">
              <h2>{data.surgeries}</h2>
              <p>Successful Surgeries</p>
            </div>

            <div className="card">
              <h2>95%</h2>
              <p>Patient Satisfaction</p>
            </div>

            <div className="card">
              <h2>24/7</h2>
              <p>Emergency Care</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="form-box">
          <h2>Book Your Consultation</h2>

          <form id="consultForm" onSubmit={handleSubmit}>
            <input id="name" type="text" placeholder="Name*" />
            <span className="error" id="nameError"></span>

            <input id="mobile" type="text" placeholder="Mobile Number*" />
            <span className="error" id="mobileError"></span>

            <select id="location">
              <option value="">Select Location</option>
              <option>Hyderabad</option>
              <option>Delhi</option>
            </select>
            <span className="error" id="locationError"></span>

            <select id="specialty">
              <option value="">Select Specialty</option>
              <option>Cardiology</option>
              <option>Neurology</option>
            </select>
            <span className="error" id="specialtyError"></span>

            <select id="consultation">
              <option value="">Consultation Type</option>
              <option>Online Consultation</option>
              <option>Physical Consultation</option>
            </select>
            <span className="error" id="consultError"></span>

            <label className="check">
              <input id="agree" className="box" type="checkbox" />
              I agree to the Privacy Policy
            </label>
            <span className="error" id="checkError"></span>

            <button className="schedule" type="submit">
              Schedule
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Consultation;