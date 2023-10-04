import "./CostDate.css";

const CostDate = (props) => {
  return (
    <div className="cost-date">
      <div className="cost-date__month">
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="cost-date__year">{props.date.getFullYear()}</div>
      <div className="cost-date__day">
        {props.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
    </div>
  );
};

export default CostDate;
