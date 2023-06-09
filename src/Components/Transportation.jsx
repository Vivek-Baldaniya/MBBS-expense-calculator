import React, { useState, useEffect } from "react";
import Activities from "./Activities";
import Card from "../Util/Card";
import "./CardList.css";
import { addTransportation } from "../Redux/Slices/CostSlice";
import { useDispatch } from "react-redux";

const Transportation = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [showNext, setShowNext] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.getElementById("activities");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(addTransportation(selectedCardTitle));
  }, [dispatch, selectedCardTitle]);

  const handleCardClick = (id, title) => {
    setSelectedCard(id);
    setSelectedCardTitle(title);
    setShowNext(true);
  };
  return (
    <div id="transportation">
      <div className="main" style={{ backgroundColor: "#AA96DA" }}>
        <h1 className="title">How would you commute within the city?</h1>
        <div className="cardList">
          <Card
            img="./img/cycle.png"
            title="Walk"
            id={1}
            selected={selectedCard === 1}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/bus.png"
            title="Local"
            id={2}
            selected={selectedCard === 2}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/car.png"
            title="Rent"
            id={3}
            selected={selectedCard === 3}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/taxi.png"
            title="Taxi"
            id={4}
            selected={selectedCard === 4}
            handleCardClick={handleCardClick}
          />
        </div>
      </div>
      {showNext ? <Activities /> : null}
    </div>
  );
};

export default Transportation;
