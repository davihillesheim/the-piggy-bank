import React from "react";

const Cards = (props) => {
  return (
    <>
      <li className="card">
        <div className="card-link">
          <figure className="card-picwrap" data-category={props.label}>
            <img className="card-img" alt="" src={props.src} />
          </figure>
          <div className="card-info">
            <h5 className="card-text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
};

export default Cards;
