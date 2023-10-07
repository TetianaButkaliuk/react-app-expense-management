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

  const filtredCosts = props.cost.filter(
    (item) => selectedYear === item.date.getFullYear().toString()
  );

  return (
    <div>
      <Card className="costs">
        <CostFilter onChangeYear={onChangeYear} year={selectedYear} />
        {filtredCosts.map((item) => {
          return (
            <CostItem
              key={item.id}
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
