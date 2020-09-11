import React from "react";

class Company extends React.Component {
  render() {
    return (
      <li>
        <article className="company flex">
          <div className="left-side">
            <h4 className="company-title">{this.props.item.name}</h4>
            <p className="role">{this.props.item.role}</p>
            <p className="location">{this.props.item.location}</p>
          </div>
          <div className="right-side"></div>
        </article>
      </li>
    );
  }
}

export default Company;
