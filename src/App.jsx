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
            <a href="https://www.happycow.net/">
              <img src={logoHappyCow} alt="Logo Happy Cow" />
            </a>
            <span>Explore</span>
            <span>Forum</span>
            <span>Blog</span>
            <span>The App</span>
            <span>Shop</span>
            <span>More</span>
          </div>
          <div>
            <IoMdSearch className="search" />
            <button className="button1">Add Listing</button>
            <button className="button2">Login / Join</button>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <h1>Find Vegan Restaurants Nearby</h1>
            <div>
              <input
                type="text"
                placeholder="Search for city, region, or zipcode"
                size={100}
              />
              <button>
                <IoMdSearch />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
