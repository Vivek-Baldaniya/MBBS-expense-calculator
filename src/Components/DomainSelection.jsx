import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Card from "../Util/Card";
import StateSelection from "./StateSelection";
import CountrySelection from "./CountrySelection";
import "./CardList.css";
import { addDomain } from "../Redux/Slices/CostSlice";

const DomainSelection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [showNext, setShowNext] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.getElementById(
      selectedCardTitle === "India" ? "state" : "country"
    );
    if (element) {
      const offset = 50;
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offset,
      });
    }
    dispatch(addDomain(selectedCardTitle));
  }, [dispatch, selectedCardTitle]);

  const handleCardClick = (id, title) => {
    setSelectedCard(id);
    setSelectedCardTitle(title);
    setShowNext(true);
  };

  return (
    <div>
      <div className="main" style={{ backgroundColor: "#FF3B6C" }}>
        <h1 className="title">What is your preference?</h1>
        <div className="cardList">
          <Card
            img="./img/india.png"
            title="India"
            id={1}
            selected={selectedCard === 1}
            handleCardClick={handleCardClick}
            scrollTo="state"
          />
          <Card
            img="./img/abroad.png"
            title="Abroad"
            id={2}
            selected={selectedCard === 2}
            handleCardClick={handleCardClick}
          />
        </div>
      </div>
      {showNext ? (
        selectedCardTitle === "India" ? (
          <StateSelection />
        ) : (
          <CountrySelection />
        )
      ) : null}
    </div>
  );
};

export default DomainSelection;
