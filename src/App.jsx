import { useState } from "react";
import logoHappyCow from "./img/happycow-logo.svg";
import { IoMdSearch } from "react-icons/io";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={logoHappyCow} alt="Logo Happy Cow" />
            <span>Explore</span>
            <span>Forum</span>
            <span>Blog</span>
            <span>The App</span>
            <span>Shop</span>
            <span>More</span>
          </div>
          <div>
            <IoMdSearch />
            <button>Add Listing</button>
            <button>Login / Join</button>
          </div>
        </nav>
        <div></div>
      </header>
    </>
  );
};

export default App;
