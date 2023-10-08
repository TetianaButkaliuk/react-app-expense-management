import { useState } from "react";
import Card from "../UI/Card";
import CostFilter from "./CostsFilter";
import CostList from "./CostList";
import "./Costs.css";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const onChangeYear = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.cost.filter(
    (item) => selectedYear === item.date.getFullYear().toString()
  );

  return (
    <div>
      <Card className="costs">
        <CostFilter onChangeYear={onChangeYear} year={selectedYear} />
        <CostList filteredCosts={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
