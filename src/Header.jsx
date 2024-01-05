import { useState } from "react";
import glass from "./assets/glass.svg";

const Header = () => {
  return (
    <header>
      <a href="/">
        <h2>Logo</h2>
      </a>
      <nav>
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Features</li>
          </a>
          <a href="#">
            <li>Blog</li>
          </a>
          <a href="#">
            <li>Shop</li>
          </a>
          <li>
            <img src={glass} />
          </li>
        </ul>
      </nav>
      <div className="login">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
