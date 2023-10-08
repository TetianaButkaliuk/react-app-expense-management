import CostItem from "./CostItem";
import "./CostList.css";

const CostList = (props) => {
  return (
    <ul className="cost-list">
      {props.filteredCosts.length === 0 && (
        <p className="cost-list__fallback">There are no expenses this year.</p>
      )}
      {props.filteredCosts.length !== 0 &&
        props.filteredCosts.map((item) => {
          return (
            <CostItem
              key={item.id}
              date={item.date}
              description={item.description}
              amount={item.amount}
            />
          );
        })}
    </ul>
  );
};

export default CostList;
