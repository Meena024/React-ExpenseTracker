import './ExpenseDate.css'

function ExpenseDate(date_props) {
  const month = date_props.date.toLocaleString("en-US", { month: "long" });
  const day = date_props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = date_props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
