import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import CartModal from "./CartModal";
import LoginModal from "./LoginModal";

export default function NavBar() {
 const counter = useSelector(state => state.shopReducer);
 const cart = useSelector((state) => state.shopReducer.cart);
 const shoppingbagCounter = (cart) => {
    let totalAmount = 0;
    cart.forEach((cartItem) => {
      totalAmount += cartItem.qty
    })
    return totalAmount;
  }

  const displayedCounter = () => {
    if (counter <= 0) shoppingbagCounter = 0;
    if (counter > 0) shoppingbagCounter = counter;
  }
  displayedCounter()

  const [showCart, setShowCart] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

return (
  <>
  <CartModal title="Discrete Brown Shoppingbag" onClose={() => setShowCart(false)} showCart={showCart} count={shoppingbagCounter}/>
  <LoginModal onClose={() => setShowLogin(false)} showLogin={showLogin} />
  <div className="navbar">
    <div className="nav_links">
      <Link to="/man">Man</Link>
      <Link to="/woman">Woman</Link>
      <Link to="/aboutus">About us</Link>
      <Link to="/contact">Contact</Link>
    </div>

    <div className="nav_name">
      <h1>Patro Afero</h1>
    </div>

    <div className="nav_icons">
      <Link to="/" className="fas fa-home" />
      <link className="fas fa-search" />
      <link className="fas fa-user" onClick={() => setShowLogin(true)} />
      <link className="fas fa-shopping-bag" onClick={() => setShowCart(true)} />
      <div className="nav_shoppingbagcounter">
          {shoppingbagCounter(cart)}
        </div>
    </div>

  </div>
  </>
);
}