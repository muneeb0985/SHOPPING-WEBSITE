import { MdOutlineLocalShipping } from "react-icons/md";
import "./nav.css";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout, CiUser } from "react-icons/ci";

function Nav({ search,setSearch,searchproduct}) {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="header">
      <div className="top_header">
        <div className="icon">
          <MdOutlineLocalShipping />
        </div>
        <div className="info">
          <p>Free Shipping when shopping up to $1000</p>
        </div>
      </div>
       
      <div className="mid_header">
        <div className="logo">
          <FaShoppingCart />
        </div>

        <div className="searchbox">
          <input type="text" placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value)} />
          <button onClick={searchproduct}><IoIosSearch /></button>
        </div>

        {
          isAuthenticated ? (
            <div className="user">
              <div className="jhon">
                <CiLogout />
              </div>
              <div className="login_button"> 
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="user">
              <div className="jhon">
                <RiLoginBoxLine />
              </div>
              <div className="login_button"> 
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div> 
            </div>
          )
        }

      </div>

      <div className="last_header">
        <div className="user_profile">
          {
            isAuthenticated && (
              <>
                <CiUser />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </>
            )
          }
        </div>

        <div className="optp">
          <ul>
            <li><Link to='/' className="link">HOME</Link></li> 
            <li><Link to='/shop' className="link">SHOP</Link></li> 
            <li><Link to='/Cart' className="link">Cart</Link></li>
            <li><Link to='/about' className="link">About</Link></li>
            <li><Link to='/contact' className="link">CONTACT</Link></li>
          </ul>
          <div className="offer">
            <p>flat10%overalliphone </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
