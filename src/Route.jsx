import React from "react";
import { Routes, Route } from 'react-router-dom'; 
import Home from "./home";
import Shop from "./shop";
import Cart from "./Cart";
import Contact from "./Contact";
import About from "./About";
const AllRoutes = ({shop,Filter,allcatefilter, addtocart,cart,setCart}) => {
    //all filter routes pass //
    return (
        <>
        <Routes>
            <Route path='/' element={<Home  addtocart={addtocart}/>} />
            <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>}/>
            <Route path='/shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>} />
            <Route path='/Contact' element={ <Contact />} />
            <Route path="/About"  element={<About/>} />
        </Routes>
        </>
    );
};
export default AllRoutes;
