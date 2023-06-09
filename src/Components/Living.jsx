import React, { useState, useEffect } from "react";
import Food from "./Food";
import Card from "../Util/Card";
import "./CardList.css";
import { addLiving } from "../Redux/Slices/CostSlice";
import { useDispatch } from "react-redux";

const Living = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [showNext, setShowNext] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.getElementById("food");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(addLiving(selectedCardTitle.replace(" Campus", "")));
  }, [dispatch, selectedCardTitle]);

  const handleCardClick = (id, title) => {
    setSelectedCard(id);
    setSelectedCardTitle(title);
    setShowNext(true);
  };
  return (
    <div id="living">
      <div className="main" style={{ backgroundColor: "#AA96DA" }}>
        <h1 className="title">Where do you plan to live?</h1>
        <div className="cardList">
          <Card
            img="./img/oncampus.png"
            title="On Campus"
            id={1}
            selected={selectedCard === 1}
            handleCardClick={handleCardClick}
          />
          <Card
            img="./img/offcampus.png"
            title="Off Campus"
            id={2}
            selected={selectedCard === 2}
            handleCardClick={handleCardClick}
          />
        </div>
      </div>
      {showNext ? <Food /> : null}
    </div>
  );
};

export default Living;
