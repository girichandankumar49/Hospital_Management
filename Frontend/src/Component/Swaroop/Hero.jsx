import React, { useState } from "react";
import hospital from "../../images/medicover.webp";

function Hero() {

const [lineLayout,setLineLayout] = useState(false);

const handleClick = ()=>{
setLineLayout(true);
};

return(

<section className={`hero ${lineLayout ? "shrink" : ""}`}>

<h1>Your Health Is Our Priority</h1>
<p>Find the best doctors and hospitals near you</p>

<div className="hero-search">

<select>
<option>Select Location</option>
<option>Hyderabad</option>
<option>Vizag</option>
<option>Guntur</option>
</select>

<select>
<option>Select Specialty</option>
<option>Cardiology</option>
<option>Neurology</option>
<option>Dermatology</option>
</select>

<button>Search Doctor</button>

</div>

<div className="hero-body">

<div className="hero-hospital">
<img src={hospital} alt="Hospital"/>
</div>

<div className={`circle-wrapper ${lineLayout ? "line-layout" : ""}`}>

<div className="circle-item" onClick={handleClick}>
<div className="circle-content">
<img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"/>
<p>Find Doctors</p>
</div>
</div>

<div className="circle-item" onClick={handleClick}>
<div className="circle-content">
<img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"/>
<p>Book Appointment</p>
</div>
</div>

<div className="circle-item" onClick={handleClick}>
<div className="circle-content">
<img src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"/>
<p>Health Checkups</p>
</div>
</div>

<div className="circle-item" onClick={handleClick}>
<div className="circle-content">
<img src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"/>
<p>Our Hospitals</p>
</div>
</div>

<div className="circle-item" onClick={handleClick}>
<div className="circle-content">
<img src="https://cdn-icons-png.flaticon.com/512/387/387569.png"/>
<p>Second Opinion</p>
</div>
</div>

</div>

</div>

</section>

);

}

export default Hero;