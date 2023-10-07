import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import "./index.css";

const initialCosts = [
  {
    date: new Date(2023, 9, 30),
    description: "Airpods",
    amount: 159.99,
    id: "c1",
  },
  {
    date: new Date(2022, 8, 4),
    description: "MacBook",
    amount: 4299.99,
    id: "c2",
  },
  {
    date: new Date(2021, 7, 18),
    description: "Iphone",
    amount: 999.99,
    id: "c3",
  },
];

function App() {
  const [costs, setCosts] = useState(initialCosts);

  const addCostHadler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div className="App">
      <h1 className="title">Expense-management</h1>
      <NewCost onAddCost={addCostHadler} />
      <Costs cost={costs} />;
    </div>
  );
}

export default App;
