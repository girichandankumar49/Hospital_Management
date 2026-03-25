import React, { useState, useEffect } from "react";
import "./Location.css";

const Location = () => {
  const [city, setCity] = useState("");
  const [userLocation, setUserLocation] = useState({ lat: null, lon: null });
  const [selectedData, setSelectedData] = useState(null);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    location: "Select Location",
    special: "",
    type: "Physical Consultation"
  });

  const [popup, setPopup] = useState(false);

  /* DATA */
  const data = {
    Hyderabad: {
      title: "Best Hospital in Hitec City, Hyderabad",
      desc: "Advanced multispeciality hospital in Hyderabad.",
      addr: "HITEC City, Hyderabad",
      lat: 17.4435,
      lon: 78.3772
    },
    Warangal: {
      title: "Best Hospital in Warangal",
      desc: "Trusted healthcare services in Warangal.",
      addr: "Hanamkonda, Warangal",
      lat: 17.9689,
      lon: 79.5941
    },
    Karimnagar: {
      title: "Best Hospital in Karimnagar",
      desc: "Quality medical care in Karimnagar.",
      addr: "Civil Hospital Road, Karimnagar",
      lat: 18.4386,
      lon: 79.1288
    },
    Nizamabad: {
      title: "Best Hospital in Nizamabad",
      desc: "Affordable healthcare in Nizamabad.",
      addr: "Vinayak Nagar, Nizamabad",
      lat: 18.6725,
      lon: 78.0941
    },
    Visakhapatnam: {
      title: "Best Hospital in Vizag",
      desc: "Top hospital in Visakhapatnam.",
      addr: "Beach Road, Vizag",
      lat: 17.6868,
      lon: 83.2185
    },
    Vijayawada: {
      title: "Best Hospital in Vijayawada",
      desc: "Leading hospital in Vijayawada.",
      addr: "Benz Circle, Vijayawada",
      lat: 16.5062,
      lon: 80.648
    },
    Guntur: {
      title: "Best Hospital in Guntur",
      desc: "Healthcare services in Guntur.",
      addr: "Arundelpet, Guntur",
      lat: 16.3067,
      lon: 80.4365
    },
    Nellore: {
      title: "Best Hospital in Nellore",
      desc: "Advanced care in Nellore.",
      addr: "Balaji Nagar, Nellore",
      lat: 14.4426,
      lon: 79.9865
    },
    Tirupati: {
      title: "Best Hospital in Tirupati",
      desc: "Top healthcare in Tirupati.",
      addr: "Renigunta Road, Tirupati",
      lat: 13.6288,
      lon: 79.4192
    }
  };

  /* GET USER LOCATION */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        });
      },
      () => {
        setUserLocation({ lat: 17.385, lon: 78.4867 });
      }
    );
  }, []);

  /* DISTANCE FUNCTION */
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;

    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  /* UPDATE UI */
  useEffect(() => {
    if (!city || !data[city] || !userLocation.lat) return;

    const h = data[city];

    const dist = getDistance(
      userLocation.lat,
      userLocation.lon,
      h.lat,
      h.lon
    );

    const displayDist =
      dist < 1
        ? (dist * 1000).toFixed(0) + " meters"
        : dist.toFixed(2) + " KM";

    setSelectedData({ ...h, distance: displayDist });
  }, [city, userLocation]);

  /* FORM HANDLER */
  const handleForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      form.name === "" ||
      form.mobile === "" ||
      form.location === "Select Location"
    ) {
      alert("Fill all fields");
      return;
    }
    setPopup(true);
  };

  return (
    <div className="container2">

      {/* DROPDOWN */}
      <div className="dropdown">
        <select onChange={(e) => setCity(e.target.value)}>
          <option value="">Select Location</option>

          <optgroup label="Telangana">
            <option value="Hyderabad">Hyderabad</option>
            <option value="Warangal">Warangal</option>
            <option value="Karimnagar">Karimnagar</option>
            <option value="Nizamabad">Nizamabad</option>
          </optgroup>

          <optgroup label="Andhra Pradesh">
            <option value="Visakhapatnam">Visakhapatnam</option>
            <option value="Vijayawada">Vijayawada</option>
            <option value="Guntur">Guntur</option>
            <option value="Nellore">Nellore</option>
            <option value="Tirupati">Tirupati</option>
          </optgroup>
        </select>
      </div>

      {/* HERO */}
      <div className="heroL">

        <div className="heroL-left">
          <h1>{selectedData ? selectedData.title : "Select City"}</h1>

          <p>
            {selectedData
              ? selectedData.desc
              : "Choose city to see hospital"}
          </p>

          <div className="address">
            {selectedData
              ? `${selectedData.addr} - ${selectedData.distance}`
              : "Address here"}
          </div>

          <a
            className="btn"
            target="_blank"
            rel="noreferrer"
            href={
              selectedData
                ? `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lon}/${selectedData.lat},${selectedData.lon}`
                : "#"
            }
          >
            Directions
          </a>
        </div>

        {/* FORM */}
        <div className="form-box1">
          <div className="form-header">Book Your Consultation</div>

          <input id="name" placeholder="Name" onChange={handleForm} />
          <input id="mobile" placeholder="Mobile" onChange={handleForm} />

          <select id="location" onChange={handleForm}>
            <option>Select Location</option>
            <option>Hyderabad</option>
            <option>Warangal</option>
            <option>Karimnagar</option>
            <option>Nizamabad</option>
          </select>

          <select id="special" onChange={handleForm}>
            <option>Select Specialty</option>
            <option>Cardiology</option>
            <option>Neurology</option>
          </select>

          <select id="type" onChange={handleForm}>
            <option>Physical Consultation</option>
            <option>Online Consultation</option>
          </select>

          <button onClick={handleSubmit}>Schedule</button>
        </div>
      </div>

      {/* POPUP */}
      {popup && (
        <div className="popup">
          <div className="popup-content">
            <h3>✅ Appointment Confirmed</h3>
            <p>
              Name: {form.name} <br />
              Mobile: {form.mobile} <br />
              Location: {form.location} <br />
              Specialty: {form.special} <br />
              Type: {form.type}
            </p>
            <button onClick={() => setPopup(false)}>OK</button>
          </div>
        </div>
      )}



      {/* <!-- CARDS --> */}
      <div class="cards">
        <div class="card"><i class="fa-solid fa-user-doctor"></i><p>Explore Doctors</p></div>
        <div class="card"><i class="fa-solid fa-id-card"></i><p>Family Health Card</p></div>
        <div class="card"><i class="fa-solid fa-comments"></i><p>Second Opinion</p></div>
        <div class="card"><i class="fa-solid fa-house-medical"></i><p>Home Health Care</p></div>
        <div class="card"><i class="fa-solid fa-stethoscope"></i><p>Health Checkup</p></div>
        <div class="card"><i class="fa-solid fa-shield-heart"></i><p>NABH Care</p></div>
      </div>

      {/* <!-- SPECIAL --> */}
      <div class="blue">
        <h2>Centres of Excellence</h2>

        <div class="specialties">
          <a href="#" class="special">
            <img src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png" class="icon" />
            <h4>Cardiology</h4>
          </a>
          <a href="#" class="special">
            <img src="https://cdn-icons-png.flaticon.com/512/4149/4149670.png" class="icon" />
            <h4>Neurology</h4>
          </a>
          <a href="#" class="special">
            <img src="https://cdn-icons-png.flaticon.com/512/2966/2966480.png" class="icon" />
            <h4>Orthopedics</h4>
          </a>
          <a href="#" class="special">
            <img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" class="icon" />
            <h4>Dermatology</h4>
          </a>
          <a href="#" class="special">
            <img src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" class="icon" />
            <h4>Gynecology</h4>
          </a>
          <a href="#" class="special">
            <img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" class="icon" />
            <h4>Urology</h4>
          </a>
        </div>

        <div class="orange-btn">Explore All Our Hospital Specialties</div>
      </div>

      {/* <!-- DOCTOR --> */}
      <div class="doctor">
        <div>
          <h2>Our Doctors</h2>
          <p>Highly experienced doctors across all specialties ensuring best care.</p>
          <a href="#" class="btn">Consult Our Specialists</a>
        </div>
        <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3" />
      </div>



      {/* <!-- POPUP-- > */}
      < div id="popup" class="popup" >
        <div class="popup-content">
          <h3>✅ Appointment Confirmed</h3>
          <p id="popupText"></p>
          <button onclick="closePopup()">OK</button>
        </div>
      </div >
      <div id="footer"></div>
    </div >
  );
};

export default Location;