import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';



const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("/")}}><Link style={{textDecoration:"none"}} to="/shop">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none"}} to="/Mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none"}} to="/womens">womens</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to="/kids">kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link to="/login"><button>login</button></Link> 
       <Link to="/cart"><img src={cart_icon} alt="" /></Link> 
        <div className="nav-card-counter">{getTotalCartItems()}</div>
      </div>
      
    </div>
  )
}

export default Navbar;