import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Entrepreneurs() {

const [showAll,setShowAll]=useState(false);
const [search,setSearch]=useState("");

const entrepreneurs=[

{
id:1,
name:"Ramesh Tailor",
skill:"Tailor",
location:"Mumbai",
rating:4.8,
image:"/src/assets/entrepreneurs/ramesh-tailor.jpg"
},

{
id:2,
name:"Suresh Potter",
skill:"Potter",
location:"Pune",
rating:4.7,
image:"/src/assets/entrepreneurs/Suresh-Potter.jpg"
},

{
id:3,
name:"Anita Artisan",
skill:"Artisan",
location:"Nashik",
rating:4.9,
image:"/src/assets/entrepreneurs/anita-artist.jpg"
},

{
id:4,
name:"Rahul Cobbler",
skill:"Cobbler",
location:"Kolhapur",
rating:4.8,
image:"/src/assets/entrepreneurs/rahul-cobbler.jpg"
},

{
id:5,
name:"Priya Saree Maker",
skill:"Saree Maker",
location:"Nagpur",
rating:4.9,
image:"/src/assets/entrepreneurs/priya-saree-maker.jpg"
},

{
id:6,
name:"Neha Jewelry Artist",
skill:"Jewelry Maker",
location:"Mumbai",
rating:4.7,
image:"/src/assets/entrepreneurs/Neha-Jewelry-Artist.jpg"
},

{
id:7,
name:"Amit Bamboo Crafts",
skill:"Bamboo Artist",
location:"Pune",
rating:4.8,
image:"/src/assets/entrepreneurs/amit-bamboo-crafts.jpg"
},

{
id:8,
name:"Rohan Furniture Maker",
skill:"Woodworker",
location:"Satara",
rating:4.8,
image:"/src/assets/entrepreneurs/rohan-furniture-maker.jpg"
}

];

const filtered=entrepreneurs.filter(item=>
item.name.toLowerCase().includes(search.toLowerCase()) ||
item.skill.toLowerCase().includes(search.toLowerCase())
);

const visibleData=showAll ? filtered : filtered.slice(0,7);

return(
<>
<Navbar/>

<div className="container">

<div className="products-hero">

<h1>Local Entrepreneurs</h1>

<p>
Connect with skilled local professionals and artisans
who preserve traditional craftsmanship.
</p>

</div>

<div className="product-search-row">

<input
type="text"
placeholder="Search entrepreneur..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button className="filter-btn">
Search
</button>

</div>

<div className="feature-grid">

<div className="feature-box">
<h3>👨‍💼 Verified Experts</h3>
<p>Trusted local professionals.</p>
</div>

<div className="feature-box">
<h3>⭐ Top Rated</h3>
<p>Highly reviewed entrepreneurs.</p>
</div>

<div className="feature-box">
<h3>📍 Local Services</h3>
<p>Available in your city.</p>
</div>

<div className="feature-box">
<h3>🤝 Direct Contact</h3>
<p>Connect without middlemen.</p>
</div>

</div>

<div className="section-header">

<h2 className="title">
Browse Entrepreneurs
</h2>

<button onClick={()=>setShowAll(!showAll)}>
{showAll ? "Show Less" : "View All"}
</button>

</div>

<div className="cards">

{visibleData.map((item)=>(

<div
className="product-card"
key={item.id}
>

<div className="product-badge">
Expert
</div>

<div className="wishlist">
❤
</div>

<img
src={item.image}
alt={item.name}
/>

<div className="product-content">

<h3>{item.name}</h3>

<div className="rating">
⭐⭐⭐⭐⭐ ({item.rating})
</div>

<p className="product-desc">
{item.skill} • {item.location}
</p>

<Link to={`/entrepreneur-profile/${item.id}`}>

<button className="cart-btn">
View Profile
</button>

</Link>

</div>

</div>

))}

</div>

</div>

<Footer/>
</>
);
}