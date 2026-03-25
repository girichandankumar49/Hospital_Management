import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Center from "./Chandan/Center";
import ecstasylogo from "../../images/ESC.jpg";
// import Doctor from "./Vidhya/Hospital";
import Location from "./Vidhya/Location";
function Navbar() {

  const [activeMenu, setActiveMenu] = useState(null);
  const navRef = useRef(null);
  const bookAppointment = () => {
    alert("Appointment page coming soon!");
  };

   useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null); // close dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>

      <img
        src={ecstasylogo}
        className="logo"
        alt="logo"
      />

      <ul className="nav-menu">

       <li
          className="dropdown"
          onMouseEnter={() => setActiveMenu("Doctor1")}
        // onMouseLeave={() => setActiveMenu(null)}
        >
          <span className="nav-link dropdown-toggle">
            <Link to="/Doctor"> Find a Doctor</Link>
            <span className={`arrow ${activeMenu === "Doctor1" ? "open" : ""}`}>
              ▼
            </span>
          </span>

          {activeMenu === "Doctor1" && (
            <ul className="dropdown-menu">
              <li><Link to="/doctors/Cardiology" onClick={() => setActiveMenu(null)}>Cardiology</Link></li>
              <li><Link to="/doctors/Neurology" onClick={() => setActiveMenu(null)}>Neurology</Link></li>
              <li><Link to="/doctors/Gastroenterology" onClick={() => setActiveMenu(null)}>Gastroenterology</Link></li>
            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => setActiveMenu("Hospital")}
        // onMouseLeave={() => setActiveMenu(null)}
        >
           <span className="nav-link dropdown-toggle">
            <Link to="/Hospital">Find a Hospital</Link>
            <span className={`arrow ${activeMenu === "Hospital" ? "open" : ""}`}>
              ▼
            </span>
          </span>

          {activeMenu === "Hospital" && (
            <ul className="dropdown-menu">
              <li><Link to="/Location" onClick={() => setActiveMenu(null)}>Hyderabad</Link></li>
              <li><Link to="/Location" onClick={() => setActiveMenu(null)}>Telangana</Link></li>
            </ul>
          )}
        </li>
        {/* <li><Link to="/" className="nav-link">Find a Doctor</Link></li> */}
        {/* <li><Link to="/" className="nav-link">Find a Hospital</Link></li> */}



        <li
          className="dropdown"
          onMouseEnter={() => setActiveMenu("specialties")}
        // onMouseLeave={() => setActiveMenu(null)}
        >
          <span className="nav-link dropdown-toggle">
           
            <Link to="/Center"> Specialties</Link>
            <span className={`arrow ${activeMenu === "specialties" ? "open" : ""}`}>
              ▼
            </span>
          </span>

          {activeMenu === "specialties" && (
            <ul className="dropdown-menu">
              <li><Link to="/cardiology" onClick={() => setActiveMenu(null)}>Cardiology</Link></li>
              <li><Link to="/cardiothoracic" onClick={() => setActiveMenu(null)}>Cardiothoracic</Link></li>
              <li><Link to="/Critical" onClick={() => setActiveMenu(null)}>Critical care</Link></li>
              <li><Link to="/Oncology" onClick={() => setActiveMenu(null)}>Oncology</Link></li>
              <li><Link to="/Orthopedices" onClick={() => setActiveMenu(null)}>Orthopedices</Link></li>
              <li><Link to="/Nephrology" onClick={() => setActiveMenu(null)}>Nephrology</Link></li>
              <li><Link to="/Neurology" onClick={() => setActiveMenu(null)}>Neurology</Link></li>
              <li><Link to="/Gastroenterology" onClick={() => setActiveMenu(null)}>Gastroenterology</Link></li>
              <li><Link to="/Surgery" onClick={() => setActiveMenu(null)}>General Surgery</Link></li>
              <li><Link to="/Gynecology" onClick={() => setActiveMenu(null)}>Gynecology</Link></li>
              <li><Link to="/Andrology" onClick={() => setActiveMenu(null)}>Andrology</Link></li>
              <li><Link to="/Cosmetic" onClick={() => setActiveMenu(null)}>Cosmetic Surgery</Link></li>
            </ul>
          )}
        </li>


        <li
          className="dropdown"
          onMouseEnter={() => setActiveMenu("services")}
        // onMouseLeave={() => setActiveMenu(null)}
        >
          <span className="nav-link dropdown-toggle">
            Services
            <span className={`arrow ${activeMenu === "services" ? "open" : ""}`}>
              ▼
            </span>
          </span>

          {activeMenu === "services" && (
            <ul className="dropdown-menu">
              <li><Link to="/Prevent" onClick={() => setActiveMenu(null)}>Preventive health check up</Link></li>
              <li><Link to="/Diagnostic" onClick={() => setActiveMenu(null)}>Diagnostic pathology test</Link></li>
              <li><Link to="/Offer" onClick={() => setActiveMenu(null)}>Offers</Link></li>
              <li><Link to="/Healthcare" onClick={() => setActiveMenu(null)}>Home Health service</Link></li>
            </ul>
          )}
        </li>


          <li
          className="dropdown"
          onMouseEnter={() => setActiveMenu("patient")}
        // onMouseLeave={() => setActiveMenu(null)}
        >
          <span className="nav-link dropdown-toggle">
            For Patients
            <span className={`arrow ${activeMenu === "patient" ? "open" : ""}`}>
              ▼
            </span>
          </span>

          {activeMenu === "patient" && (
            <ul className="dropdown-menu">
              <li><Link to="/Diseases" onClick={() => setActiveMenu(null)}>Diseases</Link></li>
              <li><Link to="/Symptoms" onClick={() => setActiveMenu(null)}>Symptoms</Link></li>
              <li><Link to="/Testimonials" onClick={() => setActiveMenu(null)}>Patient Testimonials</Link></li>
              <li><Link to="/Cost" onClick={() => setActiveMenu(null)}>Surgery Cost</Link></li>
               <li><Link to="/Blog" onClick={() => setActiveMenu(null)}>Blogs</Link></li>
                <li><Link to="/Portal" onClick={() => setActiveMenu(null)}>Patient Portal</Link></li>
            </ul>
          )}
        </li>

         <li
          className="dropdown"
          onMouseEnter={() => setActiveMenu("about")}
        // onMouseLeave={() => setActiveMenu(null)}
        >
          <span className="nav-link dropdown-toggle">
            About 
            <span className={`arrow ${activeMenu === "about" ? "open" : ""}`}>
              ▼
            </span>
          </span>

          {activeMenu === "about" && (
            <ul className="dropdown-menu">
              <li><Link to="/AboutUs" onClick={() => setActiveMenu(null)}>About Us</Link></li>
              <li><Link to="/Symptoms" onClick={() => setActiveMenu(null)}>Symptoms</Link></li>
              <li><Link to="/Success" onClick={() => setActiveMenu(null)}>Sucess Stories</Link></li>
              <li><Link to="/Privacy" onClick={() => setActiveMenu(null)}>Privacy Policies</Link></li>
               <li><Link to="/Blogs" onClick={() => setActiveMenu(null)}>Blogs</Link></li>
                <li><Link to="/Portal" onClick={() => setActiveMenu(null)}>Patient Portal</Link></li>
            </ul>
          )}
        </li>
        {/* <li><Link to="/" className="nav-link">About</Link></li> */}
        <li><Link to="/" className="nav-link">Home Care</Link></li>

      </ul>

      <button className="appoint-btn" onClick={bookAppointment}>
        Book Appointment
      </button>

    </nav>
  );
}

export default Navbar;