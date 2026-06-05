import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {

const [showAll, setShowAll] = useState(false);

const categories = [
{
name:"Embroidery Artist",
desc:"Detailed embroidery designs and artwork."
},
{
name:"Leather Craftsman",
desc:"Premium leather products and accessories."
},
{
name:"Metal Craft Artist",
desc:"Decorative handcrafted metal creations."
},
{
name:"Clay Decor Maker",
desc:"Unique clay decor and pottery items."
},
{
name:"Traditional Painter",
desc:"Authentic cultural paintings and artwork."
},
{
name:"Jewelry Maker",
desc:"Handmade jewelry and fashion accessories."
},
{
name:"Handloom Weaver",
desc:"Traditional woven fabrics and textiles."
},
{
name:"Handmade Toy Maker",
desc:"Creative handmade toys for all ages."
},
{
name:"Bamboo Crafts",
desc:"Eco-friendly bamboo products and decor."
},
{
name:"Wooden Furniture Maker",
desc:"Handcrafted wooden furniture and decor."
},
{
name:"Saree Maker",
desc:"Beautiful handcrafted sarees and fabrics."
},
{
name:"Potter",
desc:"Handmade pottery crafted with tradition."
},
{
name:"Cobbler",
desc:"Expert shoe repair and leather care."
},
{
name:"Artisan",
desc:"Traditional handmade artwork and crafts."
},
{
name:"Tailor",
desc:"Custom stitching and alteration services."
},
];

const visibleCategories = showAll
? categories
: categories.slice(0,7);

return (
<>
<Navbar />

<section className="hero">
<div className="hero-content hero-rectangle">

<div className="hero-badge">
Discover Authentic Handmade Crafts
</div>

<h1>
Support Local Talent
</h1>

<p>
Discover talented cobblers, potters,
tailors, artisans and local vendors
through HunarHub marketplace.
</p>

<Link to="/services">
<button>
Explore Marketplace
</button>
</Link>

</div>

</section>

<div className="container">

<div className="section-header">

<h2 className="title">
Popular Categories
</h2>

<button
onClick={() => setShowAll(!showAll)}
>
{showAll ? "Show Less" : "View All"}
</button>

</div>

<div className="cards">

{visibleCategories.map((item,index)=>(

<div
className="product-card"
key={index}
>

<div className="product-badge">
NEW
</div>

<div className="wishlist">
♥
</div>

<img
src={`/src/assets/categories/${item.name}.jpg`}
alt={item.name}
/>

<div className="product-content">

<h3>
{item.name}
</h3>

<p className="product-desc">
{item.desc}
</p>

<Link to="/products">

<button className="cart-btn">
View
</button>

</Link>

</div>

</div>

))}

</div>

</div>

<Footer />
</>
);
}