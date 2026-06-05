import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const bookingBanner =
new URL("../assets/services/booking-banner.jpg", import.meta.url).href;

export default function ServiceBooking() {

const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [email,setEmail] = useState("");
const [date,setDate] = useState("");
const [address,setAddress] = useState("");
const [requirement,setRequirement] = useState("");

const submitForm = () => {

if(
!name ||
!phone ||
!email ||
!date ||
!address ||
!requirement
){
alert("Please fill all fields");
return;
}

alert("Service Booking Submitted Successfully");

setName("");
setPhone("");
setEmail("");
setDate("");
setAddress("");
setRequirement("");

};

return (
<>
<Navbar />

<div className="container">

<div className="booking-page-header">

<h1>
Book Local Service
</h1>

<p>
Connect with trusted local professionals and book services instantly.
</p>

</div>

<div className="booking-card-modern">

<div className="booking-image-section">

<img
src={bookingBanner}
alt="Service Booking"
/>

<div className="booking-info-box">

<h3>
Why Choose HunarHub?
</h3>

<ul>

<li>✅ Verified Professionals</li>

<li>✅ Affordable Pricing</li>

<li>✅ Quick Response</li>

<li>✅ Trusted Local Services</li>

<li>✅ Secure Communication</li>

</ul>

</div>

</div>

<div className="booking-form-modern">

<h2>
Service Booking Form
</h2>

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>
setName(e.target.value)
}
/>

<input
type="text"
placeholder="Phone Number"
value={phone}
onChange={(e)=>
setPhone(e.target.value)
}
/>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>
setEmail(e.target.value)
}
/>

<input
type="date"
value={date}
onChange={(e)=>
setDate(e.target.value)
}
/>

<textarea
placeholder="Address"
rows="3"
value={address}
onChange={(e)=>
setAddress(e.target.value)
}
/>

<textarea
placeholder="Describe Your Service Requirement"
rows="5"
value={requirement}
onChange={(e)=>
setRequirement(e.target.value)
}
/>

<button
className="booking-submit-btn"
onClick={submitForm}
>
Book Service Now
</button>

</div>

</div>

<div className="service-benefits">

<div className="benefit-card">
⚡ Fast Booking
</div>

<div className="benefit-card">
⭐ Trusted Experts
</div>

<div className="benefit-card">
💰 Affordable Rates
</div>

<div className="benefit-card">
📞 Support Available
</div>

</div>

</div>

<Footer />
</>
);

}