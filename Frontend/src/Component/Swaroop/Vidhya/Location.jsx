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

  const data = {
    Hyderabad: {
      title: "Best Hospital in Hitec City, Hyderabad",
      desc: "Advanced multispeciality hospital in Hyderabad with expert doctors and modern infrastructure.",
      addr: "HITEC City, Hyderabad",
      lat: 17.4435,
      lon: 78.3772
    },
    Warangal: {
      title: "Best Hospital in Warangal",
      desc: "Trusted healthcare services in Warangal with experienced specialists.",
      addr: "Hanamkonda, Warangal",
      lat: 17.9689,
      lon: 79.5941
    },
    Karimnagar: {
      title: "Best Hospital in Karimnagar",
      desc: "Quality medical care in Karimnagar with modern facilities.",
      addr: "Civil Hospital Road, Karimnagar",
      lat: 18.4386,
      lon: 79.1288
    },
    Nizamabad: {
      title: "Best Hospital in Nizamabad",
      desc: "Reliable and affordable healthcare in Nizamabad.",
      addr: "Vinayak Nagar, Nizamabad",
      lat: 18.6725,
      lon: 78.0941
    },
    Visakhapatnam: {
      title: "Best Hospital in Visakhapatnam",
      desc: "Top multispeciality hospital in Vizag with advanced treatment options.",
      addr: "Beach Road, Visakhapatnam",
      lat: 17.6868,
      lon: 83.2185
    },
    Vijayawada: {
      title: "Best Hospital in Vijayawada",
      desc: "Leading hospital in Vijayawada providing expert care across all specialties.",
      addr: "Benz Circle, Vijayawada",
      lat: 16.5062,
      lon: 80.648
    },
    Guntur: {
      title: "Best Hospital in Guntur",
      desc: "Comprehensive healthcare services in Guntur with experienced doctors.",
      addr: "Arundelpet, Guntur",
      lat: 16.3067,
      lon: 80.4365
    },
    Nellore: {
      title: "Best Hospital in Nellore",
      desc: "Advanced medical care and diagnostics in Nellore.",
      addr: "Balaji Nagar, Nellore",
      lat: 14.4426,
      lon: 79.9865
    },
    Tirupati: {
      title: "Best Hospital in Tirupati",
      desc: "Top healthcare services in Tirupati with modern technology.",
      addr: "Renigunta Road, Tirupati",
      lat: 13.6288,
      lon: 79.4192
    }
  };

  /* GET LOCATION */
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
    if (!city || !data[city]) return;

    const h = data[city];

    if (!userLocation.lat) return;

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

    setSelectedData({
      ...h,
      distance: displayDist
    });
  }, [city, userLocation]);

  /* FORM */
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
    <div className="container">

      {/* DROPDOWN */}
      <div className="dropdown">
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select Location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Warangal">Warangal</option>
          <option value="Karimnagar">Karimnagar</option>
          <option value="Nizamabad">Nizamabad</option>
          <option value="Visakhapatnam">Visakhapatnam</option>
          <option value="Vijayawada">Vijayawada</option>
          <option value="Guntur">Guntur</option>
          <option value="Nellore">Nellore</option>
          <option value="Tirupati">Tirupati</option>
        </select>
      </div>

      {/* HERO */}
      <div className="heroL">
        <div className="heroL-left">
          <h1>{selectedData ? selectedData.title : "Select City"}</h1>
          <p>{selectedData ? selectedData.desc : "Choose city to see hospital"}</p>
          <div className="address">
            {selectedData
              ? `${selectedData.addr} | Distance: ${selectedData.distance}`
              : "Address here"}
          </div>

          {selectedData && (
            <a
              className="btn"
              target="_blank"
              rel="noreferrer"
              href={`https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lon}/${selectedData.lat},${selectedData.lon}`}
            >
              Directions
            </a>
          )}
        </div>

        {/* FORM */}
        <div className="form-box1">
          <div className="form-header">Book Your Consultation</div>

          <input id="name" placeholder="Name" onChange={handleForm} />
          <input id="mobile" placeholder="Mobile Number" onChange={handleForm} />

          <select id="location" onChange={handleForm}>
            <option>Select Location</option>
            <option>Hyderabad</option>
            <option>Warangal</option>
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
              Location: {form.location}
            </p>
            <button onClick={() => setPopup(false)}>OK</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Location;