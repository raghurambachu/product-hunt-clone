import React from "react";

class UpcomingProd extends React.Component {
  render() {
    return (
      <li>
        <article className="upcoming-prod flex">
          <div className="left-side">
            <h4 className="title">{this.props.item.title}</h4>
            <p className="content">{this.props.item.desc}</p>
            <p className="footer">
              <span>+ FOLLOW </span> <span>({this.props.item.followers})</span>
            </p>
          </div>
          <div className="right-side flex">
            <img src={this.props.item.img} alt={this.props.item.title} />
          </div>
        </article>
      </li>
    );
  }
}

export default UpcomingProd;
