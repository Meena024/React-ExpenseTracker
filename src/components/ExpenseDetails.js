import './ExpenseItem.css'
import Card from './Card'

function ExpenseDetails(expense_props) {
  return (
    <div className="expense-item__description">
      <h2>{expense_props.title}</h2>
      <h2>{expense_props.location}</h2>
      <Card className="expense-item__price">${expense_props.amount}</Card>
    </div>
  );
}

export default ExpenseDetails;
