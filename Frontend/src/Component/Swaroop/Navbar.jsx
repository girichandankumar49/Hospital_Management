import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Center from "./Chandan/Center";
import ecstasylogo from "../../images/ESC.jpg";

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

        <li><Link to="/" className="nav-link">Find a Doctor</Link></li>
        <li><Link to="/" className="nav-link">Find a Hospital</Link></li>



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
        <li><Link to="/" className="nav-link">For Patients</Link></li>
        <li><Link to="/" className="nav-link">About</Link></li>
        <li><Link to="/" className="nav-link">Home Care</Link></li>

      </ul>

      <button className="appoint-btn" onClick={bookAppointment}>
        Book Appointment
      </button>

    </nav>
  );
}

export default Navbar;