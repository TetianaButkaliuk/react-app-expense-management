import Costs from "./components/Costs/Costs";
import "./index.css";

const cost = [
  { date: new Date(2023, 9, 30), description: "Airpods", amount: 159.99 },
  { date: new Date(2023, 8, 4), description: "MacBook", amount: 4299.99 },
  { date: new Date(2023, 7, 18), description: "Iphone", amount: 999.99 },
];

function App() {
  return (
    <div className="App">
      <h1 className="title">Expense-management</h1>
      <Costs cost={cost}></Costs>;
    </div>
  );
}

export default App;
