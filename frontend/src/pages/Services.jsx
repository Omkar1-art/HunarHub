import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Services() {

const [services, setServices] = useState([]);
const [search, setSearch] = useState("");
const [showAll, setShowAll] = useState(false);
const [filterPrice, setFilterPrice] = useState(false);

const serviceImages = {
"Embroidery Service":"/src/assets/services/embroidery-service.jpg",
"Tailoring":"/src/assets/services/tailoring.jpg",
"Potter Service":"/src/assets/services/potter-service.jpg",
"Artisan Service":"/src/assets/services/artisan-service.jpg",
"Cobbler Service":"/src/assets/services/cobbler-service.jpg",
"Jewelry Repair":"/src/assets/services/jewelry-repair.jpg",
"Bamboo Craft":"/src/assets/services/bamboo-craft.jpg",
"Wooden Furniture":"/src/assets/services/wooden-furniture.jpg",
"Handloom Weaving":"/src/assets/services/handloom-weaving.jpg",
"Metal Craft":"/src/assets/services/metal-craft.jpg"
};

useEffect(() => {

axios
.get("https://hunarhubap-production.up.railway.app/api/services")
.then((res)=>{
setServices(res.data);
})
.catch((err)=>{
console.log(err);
});

}, []);

let filteredServices = services.filter((item)=>
item.service_name
.toLowerCase()
.includes(search.toLowerCase())
);

if(filterPrice){
filteredServices = filteredServices.filter(
(item)=>Number(item.price) > 500
);
}

const visibleServices = showAll
? filteredServices
: filteredServices.slice(0,8);

return (
<>
<Navbar />

<div className="container">

<div className="products-hero">

<h1>
Local Services
</h1>

<p>
Book trusted local professionals for tailoring, pottery, handicrafts, furniture and more.
</p>

</div>

<div className="product-search-row">

<input
type="text"
placeholder="Search services..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button
className="filter-btn"
onClick={() =>
setFilterPrice(!filterPrice)
}
>
Filter
</button>

</div>

<div className="feature-grid">

<div className="feature-box">
<h3>👨‍🔧 Skilled Experts</h3>
<p>Verified local professionals.</p>
</div>

<div className="feature-box">
<h3>⚡ Quick Booking</h3>
<p>Fast and hassle-free booking.</p>
</div>

<div className="feature-box">
<h3>💰 Affordable Pricing</h3>
<p>Transparent service charges.</p>
</div>

<div className="feature-box">
<h3>⭐ Trusted Quality</h3>
<p>High customer satisfaction.</p>
</div>

</div>

<div className="section-header">

<h2 className="title">
All Services
</h2>

<button
onClick={() =>
setShowAll(!showAll)
}
>
{showAll ? "Show Less" : "View All"}
</button>

</div>

<div className="cards">

{visibleServices.map((item)=>(

<div
className="product-card"
key={item.id}
>

<div className="product-badge">
New
</div>

<div className="wishlist">
🛠️
</div>

<img
src={
serviceImages[item.service_name] ||
"/src/assets/services/tailoring.jpg"
}
alt={item.service_name}
/>

<div className="product-content">

<h3>
{item.service_name}
</h3>

<h4>
₹{item.price}
</h4>

<div className="rating">
⭐ 4.9 (150)
</div>

<p className="product-desc">
{item.description}
</p>

<Link to="/service-booking">
<button className="cart-btn">
Book Service
</button>
</Link>

</div>

</div>

))}

</div>

<div className="service-strip">

<div className="service-item">
🕒 Same Day Service
<br/>
<span>Fast local support</span>
</div>

<div className="service-item">
💰 Best Pricing
<br/>
<span>Affordable rates</span>
</div>

<div className="service-item">
⭐ Verified Experts
<br/>
<span>Trusted professionals</span>
</div>

<div className="service-item">
📞 Customer Support
<br/>
<span>Always available</span>
</div>

</div>

</div>

<Footer />
</>
);
}