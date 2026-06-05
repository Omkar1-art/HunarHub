import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Products() {

const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
const [showAll, setShowAll] = useState(false);
const [filterHighPrice, setFilterHighPrice] = useState(false);

const productImages = {
"Handmade Pot":"/src/assets/products/handmade-pot.jpg",
"Wooden Chair":"/src/assets/products/wooden-chair.jpg",
"Traditional Saree":"/src/assets/products/traditional-saree.jpg",
"Handmade Clay Pot":"/src/assets/products/handmade-clay-pot.jpg",
"Traditional Wall Art":"/src/assets/products/traditional-wall-art.jpg",
"Handwoven Bag":"/src/assets/products/handwoven-bag.jpg",
"Custom Tailor Suit":"/src/assets/products/custom-tailor-suit.jpg",
"Leather Sandals":"/src/assets/products/leather-sandals.jpg",
"Wooden Handicraft":"/src/assets/products/wooden-handicraft.jpg",
"Decorative Pottery Set":"/src/assets/products/decorative-pottery-set.jpg",
"Handmade Jewelry":"/src/assets/products/handmade-jewelry.jpg",
"Eco-Friendly Bamboo Basket":"/src/assets/products/eco-friendly-bamboo-basket.jpg",
};

useEffect(() => {

axios
.get("https://hunarhubap-production.up.railway.app/api/products")
.then((res) => {
setProducts(res.data);
})
.catch((err) => {
console.log(err);
});

}, []);

let filteredProducts = products.filter((item) =>
item.name.toLowerCase().includes(search.toLowerCase())
);

if(filterHighPrice){
filteredProducts = filteredProducts.filter(
(item)=>Number(item.price) > 500
);
}

const visibleProducts = showAll
? filteredProducts
: filteredProducts.slice(0, 7);

return (
<>
<Navbar />

<div className="container">

<div className="products-hero">

<h1>
Handmade Products
</h1>

<p>
Explore unique handmade items crafted with passion and precision by talented artisans.
</p>

</div>

<div className="product-search-row">

<input
type="text"
placeholder="Search products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button
className="filter-btn"
onClick={() =>
setFilterHighPrice(!filterHighPrice)
}
>
Filter
</button>

</div>

<div className="feature-grid">

<div className="feature-box">
<h3>🎨 Handmade Quality</h3>
<p>Every item is made with care and expertise.</p>
</div>

<div className="feature-box">
<h3>🌱 Eco-Friendly</h3>
<p>Sustainable materials for a better tomorrow.</p>
</div>

<div className="feature-box">
<h3>🤝 Support Artisans</h3>
<p>Empower local artisans and preserve traditions.</p>
</div>

<div className="feature-box">
<h3>🔒 Secure Payments</h3>
<p>100% secure checkout and easy returns.</p>
</div>

</div>

<div className="section-header">

<h2 className="title">
All Products
</h2>

<button
onClick={() => setShowAll(!showAll)}
>
{showAll ? "Show Less" : "View All"}
</button>

</div>

<div className="cards">

{visibleProducts.map((item) => (

<div
className="product-card"
key={item.id}
>

<div className="product-badge">
New
</div>

<div className="wishlist">
🤍
</div>

<img
src={
productImages[item.name] ||
"/src/assets/products/handmade-pot.jpg"
}
alt={item.name}
/>

<div className="product-content">

<h3>{item.name}</h3>

<h4>₹{item.price}</h4>

<div className="rating">
⭐ 4.8 (120)
</div>

<p className="product-desc">
{item.description}
</p>

<Link
to={`/product-details/${item.id}`}
>
<button className="cart-btn">
Add To Cart
</button>
</Link>

</div>

</div>

))}

</div>

<div className="service-strip">

<div className="service-item">
🚚 Free Shipping
<br/>
<span>On orders above ₹999</span>
</div>

<div className="service-item">
🔄 Easy Returns
<br/>
<span>7-day return policy</span>
</div>

<div className="service-item">
🔒 Secure Payment
<br/>
<span>100% secure checkout</span>
</div>

<div className="service-item">
🎧 24/7 Support
<br/>
<span>We're here to help you</span>
</div>

</div>

</div>

<Footer />
</>
);
}