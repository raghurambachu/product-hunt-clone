import React from "react";

class Card extends React.Component {
  render() {
    let Component = this.props.childComponent;

    return (
      <div className={this.props.className + " card"}>
        <h2 className="card-title">{this.props.header}</h2>
        <div className="list flex flex-col">
          <ul>
            {this.props.list.map((item, index) => (
              <Component key={index} item={item} />
            ))}
          </ul>
          <button className="btn btn-view">View All</button>
        </div>
      </div>
    );
  }
}

export default Card;
