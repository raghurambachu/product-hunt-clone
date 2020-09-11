import React from "react";

function Card(props) {
  let Component = props.childComponent;

  return (
    <div className={props.className + " card"}>
      <h2 className="card-title">{props.header}</h2>
      <div className="list flex flex-col">
        <ul>
          {props.list.map((item, index) => (
            <Component key={index} item={item} />
          ))}
        </ul>
        <button className="btn btn-view">View All</button>
      </div>
    </div>
  );
}

export default Card;
