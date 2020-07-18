import React from "react";

const NavBar = () => (
  <>
    <nav>
      <ul className="topUl">
        <li>
          <a>Mart Name</a>
        </li>
        <li>
          <input type="text" placeholder="Search in Mart"></input>
        </li>
        <li>
          <p>My Lists</p>
        </li>
        <li>
          <p>Sign Up</p>
        </li>
      </ul>
    </nav>
  </>
);

export default NavBar;
