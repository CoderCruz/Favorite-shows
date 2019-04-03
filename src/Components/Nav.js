import React from "react"
import Episodes from "./Episodes"
import Favorite from "./Favorite"
import { Link } from "react-router-dom";

const Nav = (props) => {
  return(
    <div>
      <nav className = "navbar">
        <Link className="episode-nav" to="/">Episodes</Link>
        <Link className="favorite-nav" to="/Favorite">Favorites</Link>
      </nav>
    </div>
  )
}

export default Nav
