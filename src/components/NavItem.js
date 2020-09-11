import React from "react";

function NavItem(props) {
  return (
    <li className="nav-item">
      <a href="/">{props.content}</a>
    </li>
  );
}

export default NavItem;
