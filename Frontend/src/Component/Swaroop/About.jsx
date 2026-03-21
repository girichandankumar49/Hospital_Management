import React, { useEffect, useRef } from "react";

function About(){

const sectionRef = useRef();

useEffect(() => {

const handleScroll = () => {

     if (!sectionRef.current) return;

const pos = sectionRef.current.getBoundingClientRect().top;
const screen = window.innerHeight;

if(pos < screen - 100){
sectionRef.current.classList.add("show");
}

};

window.addEventListener("scroll", handleScroll);

return () => window.removeEventListener("scroll", handleScroll);

}, []);

return(

<section className="about-medicover" ref={sectionRef}>

<div className="about-container">

<div className="about-text">

<h2>Bringing European Health Standards To India</h2>

<p>
Medicover is the leading Multispecialty Hospital chain in India.
</p>

<p>
The group provides healthcare services including clinics,
hospitals, fertility centres and diagnostic labs.
</p>

</div>

<div className="about-images">

<img
src="https://www.medicoverhospitals.in/images/bring01.webp"
className="img-main"
alt="hospital"
/>

<img
src="https://www.medicoverhospitals.in/images/bring02.webp"
className="img-overlay"
alt="hospital"
/>

</div>

</div>

</section>

);

}

export default About;