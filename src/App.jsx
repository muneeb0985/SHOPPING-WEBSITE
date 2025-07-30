import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./nav";
import AllRoutes from "./Route"; 
import Footer from "./Footer";
import Homeproduct from "./home_product";
function App() {
//Add to cart//
const [cart,setCart]=useState([])
  //shop router...///
  const [shop,setShop]=useState(Homeproduct)
  //shop search filter//
  const [search,setSearch]=useState('')
  //shop category filter
  const Filter = (x) =>{
    const catefilter = Homeproduct.filter((product)=>{
      return(
        product.cat ==x 
      )
    })
    setShop(catefilter)
  }
  //all filter//
  const allcatefilter =()=>{
    setShop(Homeproduct)
  }
  //shop search filter
  const searchlength = (search || []).length ==0
   const searchproduct=()=>{
  if(searchlength){
    alert("please search something ! ")
    setShop(Homeproduct)
  }
  else{
    const searchfilter= Homeproduct.filter((x)=>{
      return x.cat ===search
    })
    setShop(searchfilter)
  }
}
//Add to Cart//
const addtocart=(product)=>{
  const exist = cart.find ((x)=>{
    return x.id===product.id
})
if(exist){
  alert("This product is already  added in cart ")
}
else{
  setCart([...cart, {...product, qty:1}])
  alert("ADDED TO CART")
}
console.log(cart)
}
  return (
    <>
      <BrowserRouter>
        <Nav  search={search} setSearch={setSearch} searchproduct={searchproduct}/>
        <AllRoutes  cart={cart} setCart={setCart} shop={shop}  Filter={Filter}  allcatefilter={allcatefilter} addtocart={addtocart}/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
