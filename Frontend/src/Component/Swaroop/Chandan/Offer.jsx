import React from 'react'
import "./Offer.css"
const Offer = () => {
  return (
    <div>
      <div class="offers">
  <div class="header">
    <h1>Offers</h1>
    <select>
      <option>Select Location</option>
      <option>Sangamner</option>
      <option>Kakinada</option>
      <option>Warangal</option>
    </select>
  </div>

  <div class="cards">

    {/* <!-- Card 1 --> */}
    <div class="card2">
      <img src="https://healthcarediagnosticcliniclab.com/wp-content/uploads/2023/08/health-checkup-female.png" alt="Offer Image"/>
      <div class="content1">
        <h3>Exclusive Health Checkup Package for Women! -Sangamner</h3>
        <p class="location">SANGAMNER | Mar 31, 2026</p>
        <button>Avail Offer</button>
      </div>
    </div>

    {/* <!-- Card 2 --> */}
    <div class="card2">
      <img src="https://cdn.shopify.com/s/files/1/0720/8186/7039/files/Special_Offers_on_Health_Checkup_Packages.avif?v=1751096346" alt="Offer Image"/>
      <div class="content1">
        <h3>Exclusive Health Checkup Package - Kakinada</h3>
        <p class="location">KAKINADA | Mar 31, 2026</p>
        <button>Avail Offer</button>
      </div>
    </div>

    {/* <!-- Card 3 --> */}
    <div class="card2">
      <img src="https://www.health365.sg/wp-content/uploads/2025/04/understanding-kidney-screening-results-1024x536.jpg" alt="Offer Image"/>
      <div class="content1">
        <h3>Kidney Stones Special Screening Package - Warangal</h3>
        <p class="location">WARANGAL | Jun 30, 2026</p>
        <button>Avail Offer</button>
      </div>
    </div>

  </div>
</div>
    </div>
  )
}

export default Offer
