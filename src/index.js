import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Carousel from "react-elastic-carousel";

// Components
import NavBar from "./components/NavBar";
import MenuItem from "./components/MenuItem";
import CarouItem from "./components/CarouItem";
import GroceryItem from "./components/GroceryItem";

const App = () => {
  const menuList = [
    "On Sale",
    "Weekly Highlights",
    "RedMart Label",
    "Fruit & Vegetables",
    "Meat & Seafood",
    "Rice & Cooking Essentials",
    "Beverages",
    "Household",
    "Mother & baby",
    "Dairy, Chilled & Eggs",
    "Frozen",
    "Choco, Snacks, Sweets",
    "Bakery & Breakfast",
    "Wines, Beers & Spirits",
    "Beauty",
    "Health",
    "Pet Care",
    "Party Supplies",
    "Kitchen & Dining",
  ];

  const breakPoints = [{ width: 1, itemsToShow: 1 }];

  const carouItems = ["One", "Two", "Three", "Four", "Five"];
  return (
    <>
      <NavBar />
      <main className="main-container">
        <section className="left">
          <ul className="leftUl">
            {menuList.map((item) => (
              <MenuItem item={item} />
            ))}
          </ul>
        </section>
        <section className="right">
          <Carousel breakPoints={breakPoints}>
            {carouItems.map((s) => (
              <CarouItem>{s}</CarouItem>
            ))}
          </Carousel>
          <div className="groceries-container">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
              <GroceryItem />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
