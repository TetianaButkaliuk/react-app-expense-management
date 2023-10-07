import Card from "../UI/Card";
import CostItem from "./CostItem";
import CostFilter from "./CostsFilter";
import "./Costs.css";
import { useState } from "react";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("");

  const onChangeYear = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <CostFilter onChangeYear={onChangeYear} year={selectedYear} />
      <Card className="costs">
        {props.cost.map((item) => {
          return (
            <CostItem
              date={item.date}
              description={item.description}
              amount={item.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Costs;
