import React from "react";

function UpcomingProd(props) {
  return (
    <li>
      <article className="upcoming-prod flex">
        <div className="left-side">
          <h4 className="title">{props.item.title}</h4>
          <p className="content">{props.item.desc}</p>
          <p className="footer">
            <span>+ FOLLOW </span> <span>({props.item.followers})</span>
          </p>
        </div>
        <div className="right-side flex">
          <img src={props.item.img} alt={props.item.title} />
        </div>
      </article>
    </li>
  );
}

export default UpcomingProd;
