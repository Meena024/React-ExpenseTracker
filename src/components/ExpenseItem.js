import './ExpenseItem.css';

function ExpenseItem(expense_props) {
    return (
      <div className='expense-item'>
        <div>{expense_props.date.toDateString()}</div>
        <div  className='expense-item__description'>
          <h2>{expense_props.title}</h2>
          <h2>{expense_props.location}</h2>
          <div  className='expense-item__price'>${expense_props.amount}</div>
        </div>
      </div>
    );
  }
  
  export default ExpenseItem;
  