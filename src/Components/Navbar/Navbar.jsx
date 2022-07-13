import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Navbar/Nav.module.css"
export default function Navbar() {
  return (
<>

<nav className={`navbar navbar-expand-lg navbar-dark p-4 position-fixed w-100 ${style.test}`}>
    <div class="container ">
      <Link className={`navbar-brand ${style.logo}`} to="home">START REACT</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">Menu</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-white  fw-bolder" aria-current="page" to="portfolio">PORTFOLIO</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white px-5  fw-bolder" to="About">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bolder " to="Contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</>
  )
}
