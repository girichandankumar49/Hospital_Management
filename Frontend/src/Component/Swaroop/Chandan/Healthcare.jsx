import React, { useState } from 'react'
import './Healthcare.css'

const Healthcare = () => {

    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const mobile = e.target.mobile.value.trim();
        const email = e.target.email.value.trim();
        const date = e.target.date.value;

        if (!name || !mobile || !email || !date) {
            setMessage("Please fill all required fields");
            return;
        }

        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile)) {
            setMessage("Enter valid 10-digit mobile number");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            setMessage("Enter valid email address");
            return;
        }

        setMessage("Request submitted successfully!");
        e.target.reset();
    };

    return (
        <div>

            <div className="Zero">
                <div className="overlay"></div>

                <div className="content">

                    <div className="left">
                        <h1>Healthcare at your Doorstep !</h1>
                    </div>

                    <div className="form-box">
                        <h2>Not able to go to <span>Hospital</span></h2>

                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Enter your name" />
                            <input type="text" name="mobile" placeholder="Enter Your mobile number" />
                            <input type="email" name="email" placeholder="Enter Your Email" />
                            <input type="date" name="date" />
                            <textarea name="remarks" placeholder="Remarks"></textarea>

                            <button type="submit">Request a call back</button>
                        </form>

                        <p>{message}</p>
                    </div>

                </div>
            </div>

            <section className="services">
                <h1>Get Best Home Health Services at Your Doorstep</h1>

                <div className="card-container">

                    <div className="card1">
                        <i className="fas fa-user-nurse"></i>
                        <h3>Nurses @ Home</h3>
                    </div>

                    <div className="card1">
                        <i className="fas fa-hand-holding-medical"></i>
                        <h3>Physiotherapy</h3>
                    </div>

                    <div className="card1">
                        <i className="fas fa-user-md"></i>
                        <h3>Doctor @ Home</h3>
                    </div>

                    <div className="card1">
                        <i className="fas fa-vials"></i>
                        <h3>Diagnostics</h3>
                    </div>

                </div>
            </section>

            <div className="healthcare">

                <div className="left">
                    <img src="https://images.squarespace-cdn.com/content/v1/5d98129f25863e4eb91b5bcd/8793d999-08e8-446b-99d7-b7e67c09eb9c/Expanded+Home+Based+Services.jpg" alt="" />
                </div>

                <div className="middle">
                    <h1>Medicover Home Healthcare</h1>

                    <p>
                        Medicover Hospitals has launched its new service called Home Healthcare Services.
                        Many health care treatments that were once offered only in a hospital or a doctor’s clinic
                        can now be avail at the comfort of your home.
                    </p>

                    <p>
                        Home health care is typically less expensive, more convenient, and effective than treatment
                        received in a hospital.
                    </p>

                    <p>
                        Our Home healthcare services are driven by a passionate team of experts.
                    </p>
                </div>

                <div className="right">
                    <div className="card">
                        <img src="https://cdn-icons-png.flaticon.com/512/2966/2966481.png" alt="" />
                        <h3>Health Checkup</h3>
                    </div>
                </div>

            </div>

            <div className="cities-section">

                <h1>Services Available In</h1>

                <div className="cities-container">
                    <div className="city">Hyderabad</div>
                    <div className="city">Karimnagar</div>
                    <div className="city">Nizamabad</div>
                    <div className="city">Sangareddy</div>
                    <div className="city">Chandanagar</div>
                    <div className="city">Visakhapatnam</div>
                    <div className="city">Vizianagaram</div>
                    <div className="city">Srikakulam</div>
                    <div className="city">Kakinada</div>
                    <div className="city">Kurnool</div>
                    <div className="city">Nellore</div>
                    <div className="city">Nashik</div>
                    <div className="city">Aurangabad</div>
                    <div className="city">Navi Mumbai</div>
                </div>

            </div>

        </div>
    )
}

export default Healthcare