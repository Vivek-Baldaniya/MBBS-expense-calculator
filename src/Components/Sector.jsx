import React, { useState, useEffect } from "react";
import Living from "./Living";
import Card from "../Util/Card";
import "./CardList.css";
import { addSector } from "../Redux/Slices/CostSlice";
import { useDispatch } from "react-redux";

const Sector = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [showNext, setShowNext] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.getElementById("living");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(addSector(selectedCardTitle));
  }, [dispatch, selectedCardTitle]);

  const handleCardClick = (id, title) => {
    setSelectedCard(id);
    setSelectedCardTitle(title);
    setShowNext(true);
  };

  return (
    <div id="sector">
      <div className="main" style={{ backgroundColor: "#38918c" }}>
        <h1 className="title">Which kind of college you want to choose?</h1>
        <div className="cardList">
          <Card
            img="./img/gov.png"
            title="Private"
            id={1}
            selected={selectedCard === 1}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/private.png"
            title="Government"
            id={2}
            selected={selectedCard === 2}
            handleCardClick={handleCardClick}
          />
        </div>
      </div>
      {showNext ? <Living /> : null}
    </div>
  );
};

export default Sector;
