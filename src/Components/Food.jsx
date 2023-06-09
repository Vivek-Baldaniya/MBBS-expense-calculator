import React, { useState, useEffect } from "react";
import Transportation from "./Transportation";
import Card from "../Util/Card";
import "./CardList.css";
import { addFood } from "../Redux/Slices/CostSlice";
import { useDispatch } from "react-redux";

const Food = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [showNext, setShowNext] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.getElementById("transportation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(addFood(selectedCardTitle));
  }, [dispatch, selectedCardTitle]);

  const handleCardClick = (id, title) => {
    setSelectedCard(id);
    setSelectedCardTitle(title);
    setShowNext(true);
  };

  return (
    <div id="food">
      <div className="main" style={{ backgroundColor: "#FF3B6C" }}>
        <h1 className="title">How are you going to manage your food?</h1>
        <div className="cardList">
          <Card
            img="./img/meal.png"
            title="Meal"
            id={1}
            selected={selectedCard === 1}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/outsideFood.png"
            title="Outside"
            id={2}
            selected={selectedCard === 2}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/ownFood.png"
            title="Own"
            id={3}
            selected={selectedCard === 3}
            handleCardClick={handleCardClick}
          />
        </div>
      </div>
      {showNext ? <Transportation /> : null}
    </div>
  );
};

export default Food;
