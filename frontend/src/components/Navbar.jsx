import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

const isLoggedIn =
localStorage.getItem("token");

const [showCart,setShowCart] =
useState(false);

const [showNotify,setShowNotify] =
useState(false);

const [showProfile,setShowProfile] =
useState(false);

const handleLogout = () => {

localStorage.removeItem("token");

window.location.href =
"/login";

};

return (

<header className="navbar">

<div className="logo">
HunarHub
</div>

<nav className="nav-links">

<Link to="/">Home</Link>

<Link to="/products">
Products
</Link>

<Link to="/services">
Services
</Link>

<Link to="/entrepreneurs">
Entrepreneurs
</Link>

<Link to="/contact">
Contact
</Link>

{!isLoggedIn && (
<>
<Link to="/login">
Login
</Link>

<Link to="/signup">
Signup
</Link>
</>
)}

{isLoggedIn && (
<>

<Link to="/orders">
Orders
</Link>

<div
className="nav-icon"
onClick={() =>
setShowCart(!showCart)
}
>

🛒

<span className="badge">
{localStorage.getItem("cartCount") || 0}
</span>

{showCart && (

<div className="dropdown-box">

<h4>
Shopping Cart
</h4>

<p>
🏺 Handmade Pot
</p>

<p>
👗 Traditional Saree
</p>

<Link to="/orders">

<button>
View Orders
</button>

</Link>

</div>

)}

</div>

<div
className="nav-icon"
onClick={() =>
setShowNotify(!showNotify)
}
>

🔔

<span className="badge">
3
</span>

{showNotify && (

<div className="dropdown-box">

<h4>
Notifications
</h4>

<p>
📦 Order Shipped
</p>

<p>
⭐ New Product Added
</p>

<p>
✅ Service Approved
</p>

</div>

)}

</div>

<div
className="profile-wrapper"
onClick={() =>
setShowProfile(!showProfile)
}
>

<div className="profile-circle">
OS
</div>

{showProfile && (

<div className="profile-dropdown">

<h4>
Omkar Saw
</h4>

<p>
Welcome Back 👋
</p>

<Link to="/user-profile">
<button>
My Profile
</button>
</Link>

<Link to="/orders">
<button>
My Orders
</button>
</Link>

<button
className="logout-dropdown"
onClick={handleLogout}
>
Logout
</button>

</div>

)}

</div>

</>

)}

</nav>

</header>

);

}