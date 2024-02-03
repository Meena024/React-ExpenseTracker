import './ExpenseItem.css';

function ExpenseItem() {
    return (
      <div className='expense-item'>
        <div>January 4th 2023</div>
        <div  className='expense-item__description'>
          <h2>Car Insurance</h2>
          <div  className='expense-item__price'>$500</div>
        </div>
      </div>
    );
  }
  
  export default ExpenseItem;
  