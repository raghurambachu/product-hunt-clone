import React from "react";

class NavItem extends React.Component {
  render() {
    return (
      <li className="nav-item">
        <a href="/">{this.props.content}</a>
      </li>
    );
  }
}

export default NavItem;
