import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const DeleteExpenseHandler =() => {
        console.log('clicked!!!');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <ExpenseDetails amount = {props.amount} location = {props.location} title = {props.title}/>
        <button onClick={DeleteExpenseHandler}>Delete Expense</button>
        </Card>
    );
} 

export default ExpenseItem;
