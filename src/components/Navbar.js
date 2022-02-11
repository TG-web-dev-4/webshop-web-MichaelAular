import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import Cart_Modal from "./Modal";

let shoppingbagCounter = ""

export default function NavBar() {
  const counter = useSelector(state => state.counterReducer);
  const displayedCounter = () => {
    if (counter <= 0) shoppingbagCounter = 0;
    if (counter > 0) shoppingbagCounter = counter;
  }

  displayedCounter()

  const [show, setShow] = useState(false)

return (
  <>
  <Cart_Modal title="Discrete Brown Shoppingbag" onClose={() => setShow(false)} show={show}/>
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
      <link className="fas fa-user" />
      <link className="fas fa-shopping-bag" onClick={() => setShow(true)} />
      <div className="nav_shoppingbagcounter">
          {shoppingbagCounter}
        </div>
    </div>

  </div>
  </>
);
}