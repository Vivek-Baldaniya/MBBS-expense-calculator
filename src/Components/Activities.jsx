import React, { useState, useEffect } from "react";
import Card from "../Util/Card";
import "./CardList.css";
import { addActivities } from "../Redux/Slices/CostSlice";
import { useDispatch } from "react-redux";
import DisplayExpense from "./DisplayExpense";

const Activities = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [showNext, setShowNext] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.getElementById("submit");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(addActivities(selectedCardTitle));
  }, [dispatch, selectedCardTitle]);

  const handleCardClick = (id, title) => {
    setSelectedCard(id);
    setSelectedCardTitle(title);
    setShowNext(true);
  };
  return (
    <div id="activities">
      <div className="main" style={{ backgroundColor: "#38918c" }}>
        <h1 className="title">
          Other activities would you like to participate in?
        </h1>
        <div className="cardList">
          <Card
            img="./img/gym.png"
            title="Gym"
            id={1}
            selected={selectedCard === 1}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/sports.png"
            title="Sports"
            id={2}
            selected={selectedCard === 2}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/movie.png"
            title="Movies"
            id={3}
            selected={selectedCard === 3}
            handleCardClick={handleCardClick}
          />
        </div>
        {showNext ? <DisplayExpense /> : null}
      </div>
    </div>
  );
};

export default Activities;
