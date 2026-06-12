import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductDetails() {

const { id } = useParams();

const [product, setProduct] = useState(null);

const productImages = {
"Handmade Pot": new URL("../assets/products/handmade-pot.jpg", import.meta.url).href,
"Wooden Chair": new URL("../assets/products/wooden-chair.jpg", import.meta.url).href,
"Traditional Saree": new URL("../assets/products/traditional-saree.jpg", import.meta.url).href,
"Handmade Clay Pot": new URL("../assets/products/handmade-clay-pot.jpg", import.meta.url).href,
"Traditional Wall Art": new URL("../assets/products/traditional-wall-art.jpg", import.meta.url).href,
"Handwoven Bag": new URL("../assets/products/handwoven-bag.jpg", import.meta.url).href,
"Custom Tailor Suit": new URL("../assets/products/custom-tailor-suit.jpg", import.meta.url).href,
"Leather Sandals": new URL("../assets/products/leather-sandals.jpg", import.meta.url).href,
"Wooden Handicraft": new URL("../assets/products/wooden-handicraft.jpg", import.meta.url).href,
"Decorative Pottery Set": new URL("../assets/products/decorative-pottery-set.jpg", import.meta.url).href,
"Handmade Jewelry": new URL("../assets/products/handmade-jewelry.jpg", import.meta.url).href,
"Eco-Friendly Bamboo Basket": new URL("../assets/products/eco-friendly-bamboo-basket.jpg", import.meta.url).href,
};

useEffect(() => {

axios
.get(`https://backend-sigma-five-50.vercel.app/api/products/${id}`)
.then((res) => {
setProduct(res.data);
})
.catch((err) => {
console.log(err);
});

}, [id]);

const handleBuyNow = async () => {

try {

await axios.post(
" https://backend-sigma-five-50.vercel.app/api/orders",
{
user_id:1,
product_id:id,
status:"Pending"
}
);

alert("Order Placed Successfully");

} catch (error) {

alert("Order Failed");

}

};

if(!product){
return <h2>Loading...</h2>;
}

return (
<>
<Navbar />

<div className="container">

<div className="product-details-modern">

<div className="product-image-section">

<img
src={
productImages[product.name] ||
new URL("../assets/products/handmade-pot.jpg", import.meta.url).href
}
alt={product.name}
/>

</div>

<div className="product-info-modern">

<span className="product-tag">
Handmade Product
</span>

<h1>{product.name}</h1>

<div className="product-rating">
⭐⭐⭐⭐⭐ (4.8 Reviews)
</div>

<h2>
₹{product.price}
</h2>

<p>
{product.description}
</p>

<div className="product-buttons">

<button
className="buy-btn"
onClick={handleBuyNow}
>
Buy Now
</button>

</div>

</div>

</div>

<div className="product-extra-details">

<h2>
Product Details
</h2>

<div className="details-grid">

<div className="detail-box">
<h3>🧵 Material</h3>
<p>Premium Handmade Material</p>
</div>

<div className="detail-box">
<h3>📦 Category</h3>
<p>Handcrafted Products</p>
</div>

<div className="detail-box">
<h3>✅ Availability</h3>
<p>In Stock</p>
</div>

<div className="detail-box">
<h3>🚚 Delivery</h3>
<p>Free Shipping Available</p>
</div>

</div>

</div>

<div className="related-products">

<h2>
Related Products
</h2>

<div className="cards">

<div className="product-card">

<div className="product-badge">
New
</div>

<img
src={productImages["Handmade Pot"]}
alt=""
/>

<div className="product-content">
<h3>Handmade Pot</h3>
<h4>₹799</h4>
<button>
View Product
</button>
</div>

</div>

<div className="product-card">

<div className="product-badge">
New
</div>

<img
src={productImages["Wooden Chair"]}
alt=""
/>

<div className="product-content">
<h3>Wooden Chair</h3>
<h4>₹999</h4>
<button>
View Product
</button>
</div>

</div>

<div className="product-card">

<div className="product-badge">
New
</div>

<img
src={productImages["Traditional Saree"]}
alt=""
/>

<div className="product-content">
<h3>Traditional Saree</h3>
<h4>₹1299</h4>
<button>
View Product
</button>
</div>

</div>

</div>

</div>

</div>

<Footer />
</>
);

}