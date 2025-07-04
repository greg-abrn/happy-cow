import data from "./assets/happy-cow.json";
import logoHappyCow from "./img/happycow-logo.svg";
import vegan from "./img/category-vegan.svg";
import vegetarian from "./img/category-vegetarian.svg";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <div className="left-header">
            <a href="https://www.happycow.net/">
              <img src={logoHappyCow} alt="Logo Happy Cow" />
            </a>
            <div className="dropdown">
              <button className="dropbtn">Explore</button>
              <div className="dropdown-content">
                <a href="#">Nearby</a>
                <a href="#">Top Rated</a>
                <a href="#">B&B Retreats</a>
                <a href="#">Add a listing</a>
                <a href="#">Write Review</a>
              </div>
            </div>
            <button className="dropbtn">Forum</button>
            <button className="dropbtn">Blog</button>
            <button className="dropbtn">The App</button>
            <button className="dropbtn">Shop</button>
            <div className="dropdown">
              <button className="dropbtn">More</button>
              <div className="dropdown-content">
                <a href="#">Recipes</a>
                <a href="#">Why Vegan ?</a>
                <a href="#">Travel Tips</a>
                <a href="#">Ressources</a>
              </div>
            </div>
          </div>
          <div className="right-header">
            <IoMdSearch className="search-header" />
            <button className="button-add-listing">Add Listing</button>
            <button className="button-login">Login / Join</button>
          </div>
        </nav>
      </header>
      <main>
        <section className="first-section">
          <div>
            <h1>Find Vegan Restaurants Nearby</h1>
            <div className="search-input">
              <input
                type="text"
                placeholder="Search for city, region, or zipcode"
                size={100}
              />
              <button className="input-button">
                <IoMdSearch />
              </button>
            </div>
          </div>
        </section>
        <section className="container second-section">
          <div className="vegan-food-near-me">
            <div>
              <h2>Vegan Food Near Me</h2>
            </div>
            <div className="right-second-section">
              <a href="#">View All</a>
              <IoIosArrowForward className="chevron" />
            </div>
          </div>

          <div className="caroussel-bloc">
            {data.map((restaurant, index) => {
              return (
                <div className="caroussel-item">
                  <img src={restaurant.thumbnail} alt="" />
                  <div className="name-restaurant">
                    {restaurant.category === 0 ? (
                      <img src={vegan} />
                    ) : (
                      <img src={vegetarian} />
                    )}
                    <h4>{restaurant.name}</h4>
                  </div>

                  <p className="address">
                    {restaurant.address
                      .split(",")
                      .reverse()
                      .join()
                      .split(",")[2] +
                      "," +
                      restaurant.address
                        .split(",")
                        .reverse()
                        .join()
                        .split(",")[1]}
                  </p>

                  <div className="stars">
                    <p>{restaurant.rating} ⭐️</p>
                    <p> XX Review</p>
                  </div>

                  {restaurant.description ? (
                    <p className="description">
                      {restaurant.description.slice(0, 80) + "..."}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section className="fourth-section"></section>
      </main>
    </>
  );
};

export default App;
