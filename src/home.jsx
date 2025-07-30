import React, { useState } from "react";
import "./home.css";
import { Link } from 'react-router-dom';
import Homeproduct from "./home_product";
import { AiFillHeart } from "react-icons/ai";
const Home = ({addtocart}) => {
    const [newProduct, setNewProduct] = useState([]);
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

    //filter functionality
    const filtercate = (x) => {
        const filterproduct = Homeproduct.filter((curElm) => {
            return curElm.type === x;
        });
        setTrendingProduct(filterproduct);
    };

    //All Trending Product
    const allTrendingProduct = () => {
        setTrendingProduct(Homeproduct);
    };

    const productcategory = () => {
        const newcategory = Homeproduct.filter((x) => {
            return x.type === 'new';
        });
        setNewProduct(newcategory);
    };

    return (
        <div className="page-wrapper">
            <div className="home">
                <div className="top_banner"></div>
                <div className="contant">
                    <h3>Silver Aluminium</h3>
                    <h2>Apple Watch</h2>
                    <p>30% off your first order</p>
                    <Link to="/shop" className="link">Shop Now</Link>
                </div>
            </div>

            <div className="trending">
                <div className="container">
                    <div className="left_box">
                        <div className="header">
                            <div className="heading">
                                <h2 onClick={() => allTrendingProduct()}>Trending Products</h2>
                            </div>
                            <div className="cate">
                                <h3 onClick={() => filtercate('new')}>New</h3>
                                <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                <h3 onClick={() => filtercate('top')}>Top Selling</h3>
                            </div>
                        </div>

                        <div className="products">
                            <div className="container">
                                {trendingProduct.map((Homeproduct) => {
                                    return (
                                        <div className="box" key={Homeproduct.id}>
                                            <div className="img_box">
                                                <img src={Homeproduct.img} alt={Homeproduct.Name} />
                                            </div>
                                            <div className="info">
                                                <h3>{Homeproduct.Name}</h3>
                                                <p>${Homeproduct.price}</p>
                                                <button className="btn" onClick={ () => addtocart (Homeproduct)}>Add to Cart</button>
                                             </div>
                                            </div>
                                            
                                            
                                           
                                      
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banners">
                <div className="container">
                    <div className="left_box">
                        <div className="box">
                            <img src="/smallfan.png" alt="" />
                        </div>
                        <div className="box12">
                            <img src="https://i.pinimg.com/1200x/6e/c7/8b/6ec78bdda44ff544c0473a466b5c0e93.jpg" alt="" />
                            
                        </div>
                    </div>
                </div>
            </div>

  
                </div>
           );
};

export default Home;
