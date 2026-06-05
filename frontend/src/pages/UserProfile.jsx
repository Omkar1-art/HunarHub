import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UserProfile() {

return (

<>

<Navbar />

<div className="container">

<div className="user-cover">

<div className="user-profile-card">

<div className="user-avatar">

<img
src="https://i.pravatar.cc/150?img=12"
alt="profile"
style={{
width:"100%",
height:"100%",
borderRadius:"50%"
}}
/>

</div>

<div>

<h1>
Omkar Sawant
</h1>

<p>
omkar@gmail.com
</p>

<button
className="cart-btn"
style={{marginTop:"10px"}}
>
Edit Profile
</button>

</div>

</div>

</div>

<div className="profile-stats-grid">

<div className="profile-stat-box">
<h2>12</h2>
<p>Total Orders</p>
</div>

<div className="profile-stat-box">
<h2>8</h2>
<p>Reviews</p>
</div>

<div className="profile-stat-box">
<h2>5</h2>
<p>Services Booked</p>
</div>

<div className="profile-stat-box">
<h2>15</h2>
<p>Wishlist Items</p>
</div>

</div>

<div className="profile-main-grid">

<div className="profile-info-card">

<h2>
Personal Information
</h2>

<p>
<strong>Name:</strong>
Omkar Sawant
</p>

<p>
<strong>Email:</strong>
omkar@gmail.com
</p>

<p>
<strong>Phone:</strong>
+91 99993595
</p>

<p>
<strong>Location:</strong>
Mumbai, India
</p>

</div>

<div className="profile-info-card">

<h2>
Recent Activity
</h2>

<p>
🛒 Ordered Handmade Pot
</p>

<p>
⭐ Reviewed Tailoring Service
</p>

<p>
📦 Product Delivered
</p>

<p>
✅ Service Completed
</p>

</div>

</div>

</div>

<Footer />

</>

);

}