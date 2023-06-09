import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./costing.css";
import expenses from "../api/expenses";
import _ from "lodash";

const DisplayExpense = () => {
  const data = useSelector((state) => state.cost);
  const [showCosting, setShowCosting] = useState(false);
  const [totalCost, setTotalCost] = useState(null);

  useEffect(() => {
    const element = document.getElementById("finalCosting");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [showCosting]);

  const handleSubmit = () => {
    console.log("Calling...");
    setShowCosting(true);

    // expenses
    //   .get("/cost/data")
    //   .then((res) => {
    //     console.log(res.data);
    //     const domainCost = _.get(
    //       res,
    //       `data.${data.domain}.${data.sector}.${data.place}.Fees`
    //     );
    //     const livingCost = _.get(
    //       res,
    //       `data.${data.domain}.${data.sector}.${data.place}.Living.${data.living}`
    //     );
    //     const foodCost = _.get(
    //       res,
    //       `data.${data.domain}.${data.sector}.${data.place}.Food.${data.food}`
    //     );
    //     const transportationCost = _.get(
    //       res,
    //       `data.${data.domain}.${data.sector}.${data.place}.Transportation.${data.transportation}`
    //     );
    //     const activityCost = _.get(
    //       res,
    //       `data.${data.domain}.${data.sector}.${data.place}.Activities.${data.activity}`
    //     );
    //     console.log("L::", livingCost);
    //     console.log("F::", foodCost);
    //     console.log("T::", transportationCost);
    //     console.log("A::", activityCost);

    //     setTotalCost(
    //       domainCost + livingCost + foodCost + transportationCost + activityCost
    //     );
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    async function calculateTotalCost() {
      try {
        const res = await expenses.get("/cost/data");

        const domainCost = _.get(
          res,
          `data.${data.domain}.${data.sector}.${data.place}.Fees`
        );
        const livingCost = _.get(
          res,
          `data.${data.domain}.${data.sector}.${data.place}.Living.${data.living}`
        );
        const foodCost = _.get(
          res,
          `data.${data.domain}.${data.sector}.${data.place}.Food.${data.food}`
        );
        const transportationCost = _.get(
          res,
          `data.${data.domain}.${data.sector}.${data.place}.Transportation.${data.transportation}`
        );
        const activityCost = _.get(
          res,
          `data.${data.domain}.${data.sector}.${data.place}.Activities.${data.activity}`
        );

        const totalCost =
          domainCost +
          livingCost +
          foodCost +
          transportationCost +
          activityCost;
        setTotalCost(totalCost);
      } catch (err) {
        console.log(err);
      }
    }

    // Call the function
    calculateTotalCost();
  };

  if (!data) {
    return <div>No expense data available.</div>;
  }

  return (
    <div id="submit">
      <button className="finalSubmit" onClick={handleSubmit}>
        Submit
      </button>
      {showCosting ? (
        <div className="wrapper five" id="finalCosting">
          <span className="float-box">
            <h3 className="float">
              Your Total MBBS Study Expenses is{" "}
              {totalCost ? totalCost : ""}
            </h3>
          </span>
        </div>
      ) : // <div id="finalCosting">
      //   <h2 className="output">
      //     Your Total MBBS Study Expenses is {totalCost}
      //   </h2>
      // </div>
      null}
    </div>
  );
};

export default DisplayExpense;
