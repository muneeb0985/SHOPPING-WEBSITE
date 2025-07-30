import React, { useState } from "react";
import "./shop.css";
import { FiFilter } from "react-icons/fi";
import { AiFillEye, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { addToCart } from "./addtocartslice";
import { useSelector, useDispatch } from "react-redux";
import { setcategory } from "./filterslice";

const Shop = ({ shop }) => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filter.category);
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState([]);

  const detailpage = (product) => {
    setDetail(product);
    setShowDetail(true);
  };

  const closedetail = () => {
    setShowDetail(false);
  };

  // ✅ Updated Filter Logic
  const filteredProducts =
    category === "All"
      ? shop
      : shop.filter(
          (item) =>
            item.cat?.toLowerCase().trim() === category.toLowerCase().trim()
        );

  return (
    <>
      {showDetail && (
        <div className="product_detail">
          <button className="close_btn" onClick={closedetail}>
            <AiOutlineClose />
          </button>
          <div className="container">
            <div className="img_box">
              <img src={detail.img} alt="" />
            </div>
            <div className="info">
              <h4>{detail.cat}</h4>
              <h2>{detail.Name}</h2>
              <p>
                A Screen Everyone Will Love: Whether your family is streaming or
                video editing with friends...
              </p>
              <h3>${detail.price}</h3>
              <button onClick={() => dispatch(addToCart(detail))}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="shop">
        <h2>shop</h2>
        <p>Home.shop</p>
        <div className="container">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h3>All Categories</h3>
              </div>
              <div className="box">
                <ul>
                  <li onClick={() => dispatch(setcategory("All"))}>All</li>
                  <li onClick={() => dispatch(setcategory("Bag"))}>Bag</li>
                  <li onClick={() => dispatch(setcategory("Phone"))}>Phone</li>
                  <li onClick={() => dispatch(setcategory("Face-wash"))}>Face-wash</li>
                  <li onClick={() => dispatch(setcategory("Perfume"))}>Perfume</li>
                  <li onClick={() => dispatch(setcategory("HairDryer"))}>HairDryer</li>
                  <li onClick={() => dispatch(setcategory("Face Product"))}>Face Product</li>
                  <li onClick={() => dispatch(setcategory("charger"))}>Charger</li>
                  <li onClick={() => dispatch(setcategory("airpod"))}>Airpod</li>
                  <li onClick={() => dispatch(setcategory("creame"))}>Creame</li>
                  <li onClick={() => dispatch(setcategory("Comb"))}>Comb</li>
                  <li onClick={() => dispatch(setcategory("FacePowder"))}>FacePowder</li>
                  <li onClick={() => dispatch(setcategory("Speaker"))}>Speaker</li>
                  <li onClick={() => dispatch(setcategory("gloves"))}>Gloves</li>
                  <li onClick={() => dispatch(setcategory("Medicine"))}>Eno</li>
                </ul>
              </div>
            </div>

            <div className="banner">
              <div className="img_box">
                <img src="/macbookpro.png" alt="" />
              </div>
            </div>
          </div>

          <div className="right_box">
            <div className="banner">
              <div className="img_box">
                <img src="" alt="" />
              </div>
            </div>

            <div className="product_box">
              <h2>Shop Product</h2>
              <div className="product_container">
                {filteredProducts.map((item) => (
                  <div className="box" key={item.id}>
                    <div className="img_box">
                      <img src={item.img} alt="" />
                      <div className="icon">
                        <li>
                          <AiFillHeart />
                        </li>
                        <li onClick={() => detailpage(item)}>
                          <AiFillEye />
                        </li>
                      </div>
                    </div>
                    <div className="detail">
                      <h3>{item.Name}</h3>
                      <p>${item.price}</p>
                      <button onClick={() => dispatch(addToCart(item))}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
