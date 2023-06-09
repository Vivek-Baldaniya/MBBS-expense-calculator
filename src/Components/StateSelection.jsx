import React, { useState, useEffect } from "react";
import Sector from "./Sector";
import Card from "../Util/Card";
import "./CardList.css";
import { useDispatch } from "react-redux";
import { addPlace } from "../Redux/Slices/CostSlice";

const StateSelection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [showNext, setShowNext] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.getElementById("sector");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(addPlace(selectedCardTitle));
  }, [dispatch, selectedCardTitle]);

  const handleCardClick = (id, title) => {
    setSelectedCard(id);
    setSelectedCardTitle(title);
    setShowNext(true);
  };
  return (
    <div id="state">
      <div className="main" style={{ backgroundColor: "#8AAAE5" }}>
        <h1 className="title">Select State</h1>
        <div className="cardList">
          <Card
            img="./img/karnataka.png"
            title="Karnataka"
            id={1}
            selected={selectedCard === 1}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/maharastra.png"
            title="Maharastra"
            id={2}
            selected={selectedCard === 2}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/tamilNadu.png"
            title="Tamil_Nadu"
            id={3}
            selected={selectedCard === 3}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/uttarPradesh.png"
            title="Uttar_Pradesh"
            id={4}
            selected={selectedCard === 4}
            handleCardClick={handleCardClick}
          />
        </div>
      </div>
      {showNext ? <Sector /> : null}
    </div>
  );
};

export default StateSelection;
