import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div>
      <div
        className={`card ${props.selected ? "selected" : ""}`}
        onClick={() => props.handleCardClick(props.id, props.title)}
      >
        <div className="cardImage">
          <img src={props.img} alt="" className="cardImg" />
        </div>
      </div>
      <div className="cardTitle">
        <h3 className="cardTitle">{props.title}</h3>
      </div>
    </div>
  );
};

export default Card;
