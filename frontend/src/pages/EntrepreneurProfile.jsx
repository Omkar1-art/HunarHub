import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import { Link, useParams } from "react-router-dom";

const entrepreneurImages = {
"Ramesh Tailor": new URL("../assets/entrepreneurs/ramesh-tailor.jpg", import.meta.url).href,
"Suresh Potter": new URL("../assets/entrepreneurs/Suresh-Potter.jpg", import.meta.url).href,
"Anita Artisan": new URL("../assets/entrepreneurs/anita-artist.jpg", import.meta.url).href,
"Rahul Cobbler": new URL("../assets/entrepreneurs/rahul-cobbler.jpg", import.meta.url).href,
"Priya Saree Maker": new URL("../assets/entrepreneurs/priya-saree-maker.jpg", import.meta.url).href,
"Neha Jewelry Artist": new URL("../assets/entrepreneurs/Neha-Jewelry-Artist.jpg", import.meta.url).href,
"Amit Bamboo Crafts": new URL("../assets/entrepreneurs/amit-bamboo-crafts.jpg", import.meta.url).href,
"Rohan Furniture Maker": new URL("../assets/entrepreneurs/rohan-furniture-maker.jpg", import.meta.url).href,
};

export default function EntrepreneurProfile(){

const {id}=useParams();

const entrepreneurs={

1:{
name:"Ramesh Tailor",
skill:"Tailoring Expert",
location:"Mumbai",
experience:"10 Years",
rating:"4.8",
image:"/src/assets/entrepreneurs/ramesh-tailor.jpg"
},

2:{
name:"Suresh Potter",
skill:"Pottery Specialist",
location:"Pune",
experience:"8 Years",
rating:"4.7",
image:"/src/assets/entrepreneurs/Suresh-Potter.jpg"
},

3:{
name:"Anita Artisan",
skill:"Traditional Artisan",
location:"Nashik",
experience:"12 Years",
rating:"4.9",
image:"/src/assets/entrepreneurs/anita-artist.jpg"
},

4:{
name:"Rahul Cobbler",
skill:"Leather Repair Expert",
location:"Kolhapur",
experience:"9 Years",
rating:"4.8",
image:"/src/assets/entrepreneurs/rahul-cobbler.jpg"
},

5:{
name:"Priya Saree Maker",
skill:"Saree Designer",
location:"Nagpur",
experience:"11 Years",
rating:"4.9",
image:"/src/assets/entrepreneurs/priya-saree-maker.jpg"
},

6:{
name:"Neha Jewelry Artist",
skill:"Jewelry Designer",
location:"Mumbai",
experience:"7 Years",
rating:"4.7",
image:"/src/assets/entrepreneurs/Neha-Jewelry-Artist.jpg"
},

7:{
name:"Amit Bamboo Crafts",
skill:"Bamboo Craft Specialist",
location:"Pune",
experience:"10 Years",
rating:"4.8",
image:"/src/assets/entrepreneurs/amit-bamboo-crafts.jpg"
},

8:{
name:"Rohan Furniture Maker",
skill:"Furniture Designer",
location:"Satara",
experience:"13 Years",
rating:"4.8",
image:"/src/assets/entrepreneurs/rohan-furniture-maker.jpg"
}

};

const person=
entrepreneurs[id] ||
entrepreneurs[1];

return(
<>
<Navbar/>

<div className="container">

<div className="product-details-modern">

<div className="product-image-section">

<img
src={entrepreneurImages[person.name]}
alt={person.name}
/>

</div>

<div className="product-info-modern">

<div className="product-tag">
Verified Entrepreneur
</div>

<h1>
{person.name}
</h1>

<div className="product-rating">
⭐⭐⭐⭐⭐ ({person.rating} Reviews)
</div>

<h2>
{person.skill}
</h2>

<p>
📍 {person.location}
</p>

<p>
🧑‍💼 Experience : {person.experience}
</p>

<p>
Professional entrepreneur providing quality handmade
services and traditional craftsmanship.
</p>

<Link to="/service-booking">

<button className="buy-btn">
Book Service
</button>

</Link>

</div>

</div>

<div className="product-extra-details">

<h2>
Entrepreneur Details
</h2>

<div className="details-grid">

<div className="detail-box">
<h3>🛠 Skill</h3>
<p>{person.skill}</p>
</div>

<div className="detail-box">
<h3>📍 Location</h3>
<p>{person.location}</p>
</div>

<div className="detail-box">
<h3>⭐ Rating</h3>
<p>{person.rating}</p>
</div>

<div className="detail-box">
<h3>💼 Experience</h3>
<p>{person.experience}</p>
</div>

</div>

</div>

<div className="related-products">

<h2>
Related Entrepreneurs
</h2>

<div className="cards">

<div className="product-card">

<img
src={entrepreneurImages["Suresh Potter"]}
alt=""
/>

<div className="product-content">

<h3>Suresh Potter</h3>

<h4>Potter</h4>

<Link to="/entrepreneur-profile/2">

<button className="cart-btn">
View Profile
</button>

</Link>

</div>

</div>

<div className="product-card">

<img
src={entrepreneurImages["Anita Artisan"]}
alt=""
/>

<div className="product-content">

<h3>Anita Artisan</h3>

<h4>Artisan</h4>

<Link to="/entrepreneur-profile/3">

<button className="cart-btn">
View Profile
</button>

</Link>

</div>

</div>

</div>

</div>

</div>

<Reviews/>

<Footer/>
</>
);
}