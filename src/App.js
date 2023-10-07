import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import "./index.css";

const cost = [
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
  const addCostHadler = (cost) => {
    console.log(cost);
    console.log("App component");
  };
  return (
    <div className="App">
      <h1 className="title">Expense-management</h1>
      <NewCost onAddCost={addCostHadler} />
      <Costs cost={cost} />;
    </div>
  );
}

export default App;
