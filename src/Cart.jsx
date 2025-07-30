import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "./addtocartslice";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  const cart = useSelector((state) => state.cart.products); 
  const dispatch = useDispatch();

  // Total Price
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 && (
        <div className="empty_cart">
          <h2>Your Shopping cart is empty</h2>
          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
      <div className="container">
        {cart.map((item) => (
          <div className="box" key={item.id}>
            <div className="img_box">
              <img src={item.img} alt="" />
            </div>
            <div className="detail">
              <div className="info">
                <h3>{item.Name}</h3>
                <h4>{item.cat}</h4>
                <p>Price: ${item.price}</p>
                <p className="price">Total: ${item.price * item.qty}</p>
              </div>
              <div className="quantity">
                <button onClick={() => dispatch(incrementQty({ id: item.id }))}>+</button>
                <input type="number" value={item.qty} readOnly />
                <button onClick={() => dispatch(decrementQty({ id: item.id }))}>-</button>
              </div>
              <div className="icon">
                <li onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                  <AiOutlineClose />
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom">
        {cart.length > 0 && (
          <>
            <div className="Total">
              <h4>SUB-TOTAL: ${total}</h4>
            </div>
            <button>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
