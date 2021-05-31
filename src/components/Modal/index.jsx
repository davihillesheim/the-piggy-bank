import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import './Modal.css';

const Modal = ({ id = 'modal', onClose = () => { }, categories, addExpense }) => {

  const userId = Number(localStorage.getItem('loggedUser'));
  const [categoryId, setCategoryId] = useState();
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState('');

  const handleSelectDate = date => {
    setDate(date);
    console.log(date);
  }

  const handleOutsideClick = event => {
    if (event.target.id === id) onClose();
  }

  const onChangeCategoryId = value => {
    setCategoryId(Number(value));
  }

  const onChangeAmount = event => {
    setAmount(Number(event.target.value));
  }

  const onChangeDescription = event => {
    setDescription(event.target.value);
  }

  const onSubmitExpense = (userId, categoryId, amount, description, date) => {
    fetch('http://localhost:3001/expenses', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: userId,
        category_id: categoryId,
        amount: amount,
        description: description,
        date: date
      })
    }).then(response => response.json()).then(expense => {
      if(expense.user_id) {
        console.log('here comes the new expense!!!!!!!!!!!')
        console.log(expense)
        console.log('Expense created successfully');
        addExpense({expense})
      } else {
        console.log('Failed to create expense');
      }
    })
  }

  return (
    <div id='modal' className='modal' onClick={handleOutsideClick}>
      <div className='modal-container'>
        <button className='close' onClick={onClose}>close</button>
        <ul className='category-grid'>
          {categories.map(category => <li key={category.id} onClick={() => onChangeCategoryId(category.id)}>
            <img src={category.icon_url} alt={category.name} />
            <span>
              {category.name}
            </span>
          </li>)}
        </ul>
        <div className='modal-input'>
          <label htmlFor="for">Amount</label>
          <input type="number" step="any" required value={amount} onChange={onChangeAmount}/>
          <DatePicker selected={date} onChange={date => handleSelectDate(date)}/>
          <label htmlFor="for">Description(optional)</label>
          <input type="text" required value={description} onChange={onChangeDescription}/>
        </div>
        <div className='content'></div>
        <button className='submit-expense' onClick={() => {
          onSubmitExpense(userId, categoryId, amount, description, date)
          }
        }>
          Ok
        </button>
      </div>
    </div>
  )
}

export default Modal;
