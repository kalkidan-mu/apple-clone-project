import React from 'react'
import logo from "../../assets/images/icons/logo-sm.png";
import searchIcon from "../../assets/images/icons/search-icon-sm.png";
import cartIcon from "../../assets/images/icons/cart-sm.png";
import Headerlink from './Headerlink';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <Headerlink link="/" name="Mac" />
              <Headerlink link="/iphone/" name="iphone" />
              <Headerlink link="/" name="ipad" />
              <Headerlink link="/" name="Watch" />
              <Headerlink link="/" name="tv" />
              <Headerlink link="/" name="Music" />
              <Headerlink link="/" name="Support" />
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/">
                  <img src={searchIcon} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart/">
                  <img src={cartIcon} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header
