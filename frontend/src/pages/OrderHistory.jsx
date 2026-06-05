import React, {
useEffect,
useState
} from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

export default function OrderHistory() {

const [orders,setOrders] =
useState([]);

const [search,setSearch] =
useState("");

useEffect(() => {

axios
.get("https://hunarhubap-production.up.railway.app/api/orders")
.then((res)=>{
setOrders(res.data);
})
.catch((err)=>{
console.log(err);
});

},[]);

const filteredOrders =
orders.filter((item)=>
item.id
.toString()
.includes(search)
);

return (
<>
<Navbar />

<div className="container">

<div className="orders-header">

<h1>My Orders</h1>

<p>
Track all your marketplace orders
in one place.
</p>

</div>

<div className="order-stats">

<div className="stat-card">
<h2>{orders.length}</h2>
<p>Total Orders</p>
</div>

<div className="stat-card">
<h2>₹15K+</h2>
<p>Total Purchase</p>
</div>

<div className="stat-card">
<h2>98%</h2>
<p>Completed</p>
</div>

</div>

<div className="order-search">

<input
type="text"
placeholder="Search Order ID..."
value={search}
onChange={(e)=>
setSearch(e.target.value)
}
/>

</div>

{filteredOrders.length===0 ? (

<div className="empty-orders">
No Orders Found
</div>

) : (

filteredOrders.map((item)=>(

<div
key={item.id}
className="modern-order-card"
>

<div>

<h3>
Order #{item.id}
</h3>

<p>
Product ID : {item.product_id}
</p>

<p>
Order Date : 04 Jun 2026
</p>

<p>
Expected Delivery : 08 Jun 2026
</p>

<p>
User ID :
{item.user_id}
</p>

</div>

<div>

<span className="status-badge">
{item.status}
</span>

<button
className="cart-btn"
style={{marginTop:"10px"}}
>
Track Order
</button>

</div>

</div>

))

)}

</div>

<Footer />
</>
);
}