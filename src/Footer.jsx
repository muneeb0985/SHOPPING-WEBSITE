import './footer.css';
import { FaPiggyBank, FaShippingFast, FaHeadphones, FaShoppingCart } from "react-icons/fa";
import { BsFillWalletFill } from "react-icons/bs";
import { Route } from 'react-router';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        {/* Left Box */}
        <div className="left-box">
          <div className="box">
            <div className="icon_box"><FaPiggyBank /></div>
            <div className="detail">
              <h3>Great Saving</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon_box"><FaShippingFast /></div>
            <div className="detail">
              <h3>Free Delivery</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon_box"><FaHeadphones /></div>
            <div className="detail">
              <h3>24/7 Support</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon_box"><BsFillWalletFill /></div>
            <div className="detail">
              <h3>Money Back</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className='right_box'>
          <div className='header'>
            <FaShoppingCart />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, obcaecati!</p>
          </div>

          <div className='box12'>
            <div className='box12__item'>
              <h3>Your Account</h3>
              <ul>
                <li>About us</li>
                <li>Account</li>
                <li>Payment</li>
                <li>Sales</li>
              </ul>
            </div>

            <div className='box12__item'>
              <h3>Products</h3>
              <ul>
                <li>Delivery</li>
                <li>Track Order</li>
                <li>New product</li>
                <li>Old product</li>
              </ul>
            </div>

            <div className='box12__item'>
              <h3>Contact Us</h3>
              <ul>
                <li>4005, Silver Business Point Pakistan</li>
                <li>+9233474238772</li>
                <li>info@gmail.com</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

