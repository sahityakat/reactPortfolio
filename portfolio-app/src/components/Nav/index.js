import React from "react";

function Nav() {

  return (
    <header>
      <h2>Lernantino</h2>
      <nav>
        <ul className="flex-row">
        <li className="mx-2">
            <span>About me</span>
            </li>
          <li className="mx-2">
            <span>Portfolio</span>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          <li className="mx-2">
            <span>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
