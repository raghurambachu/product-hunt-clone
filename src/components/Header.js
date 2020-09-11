import React from "react";
import NavItem from "./NavItem";

function Header() {
  return (
    <header className="header">
      <div className="container flex align-center space-between">
        <div className="flex align-center">
          <div className="brand-logo">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                  fill="#DA552F"
                ></path>
                <path
                  d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
                  fill="#FFF"
                ></path>
              </g>
            </svg>
          </div>
          <input
            type="text"
            name="search"
            className="search-input"
            onClick={() => {}}
            placeholder="Discover your next favorite thing"
          />
          <ul className="flex nav-links">
            {["Deals", "Jobs", "Discussions", "Ship", "Mentors"].map(
              (navItem) => (
                <NavItem content={navItem} />
              )
            )}
          </ul>
        </div>
        <div className="buttons">
          <a className="btn btn-login" href="/">
            Log in
          </a>
          <a href="/" className="btn btn-register">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
