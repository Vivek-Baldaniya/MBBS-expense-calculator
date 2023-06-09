import React, { useState, useEffect } from "react";
import Sector from "./Sector";
import Card from "../Util/Card";
import "./CardList.css";
import { useDispatch } from "react-redux";
import { addPlace } from "../Redux/Slices/CostSlice";

const CountrySelection = () => {
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
    <div id="country">
      <div className="main" style={{ backgroundColor: "#8AAAE5" }}>
        <h1 className="title">Select Country</h1>
        <div className="cardList">
          <Card
            img="./img/kyrgyzstan.png"
            title="Kyrgyzstan"
            id={1}
            selected={selectedCard === 1}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/nepal.png"
            title="Nepal"
            id={2}
            selected={selectedCard === 2}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/philippines.png"
            title="Philippines"
            id={3}
            selected={selectedCard === 3}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/georgia.png"
            title="Georgia"
            id={4}
            selected={selectedCard === 4}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/kazakhstan.png"
            title="Kazakhstan"
            id={5}
            selected={selectedCard === 5}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/russia.png"
            title="Russia"
            id={6}
            selected={selectedCard === 6}
            handleCardClick={handleCardClick}
          />
        </div>
      </div>
      {showNext ? <Sector /> : null}
    </div>
  );
};

export default CountrySelection;
