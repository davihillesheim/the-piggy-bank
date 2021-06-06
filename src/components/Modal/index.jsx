import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import CurrencyInput from 'react-currency-input-field';
import './Modal.css';

const Modal = ({ id = 'modal', onClose = () => { }, categories, addExpense }) => {

  const userId = Number(localStorage.getItem('loggedUser'));
  const [categoryId, setCategoryId] = useState();
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');

  const limit = 10000;
  const prefix = '£';

  const [errorMessage, setErrorMessage] = useState('');
  const [className, setClassName] = useState('');
  const [value, setValue] = useState(0.00);

  /**
   * Handle validation
   */
  const handleOnValueChange = value => {

    if (!value) {
      setClassName('');
      setValue('');
      return;
    }

    if (Number.isNaN(Number(value))) {
      setErrorMessage('Please enter a valid number');
      setClassName('is-invalid');
      return;
    }

    if (Number(value) > limit) {
      setErrorMessage(`Max: ${prefix}${limit}`);
      setClassName('is-invalid');
      setValue(value);
      return;
    }

    setClassName('is-valid');
    setValue(value);
  };

  const handleSelectDate = date => {
    setDate(new Date(date));
  }

  const handleOutsideClick = event => {
    if (event.target.id === id) onClose();
  }

  const onChangeCategoryId = value => {
    setCategoryId(Number(value));
  }

  const onChangeDescription = event => {
    setDescription(event.target.value);
  }

  const onSubmitExpense = (userId, categoryId, amount, description, date) => {
    fetch('http://localhost:3001/expenses', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: userId,
        category_id: categoryId,
        amount: amount,
        description: description,
        date: date
      })
    }).then(response => response.json()).then(expense => {
      if (expense.id) {
        addExpense({ expense })
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
          {categories.map(
            category =>
              <li className={category.id === categoryId ? 'selected' : ''}
                key={category.id}
                onClick={() => onChangeCategoryId(category.id)}
              >
                <img src={category.icon_url} alt={category.name} />
                <span>
                  {category.name}
                </span>
              </li>)}
        </ul>
        <div className='modal-input'>
          <label htmlFor="for">Amount</label>
          <CurrencyInput
            id="validationCustom01"
            name="input-1"
            className={`form-control`}
            value={value}
            onValueChange={handleOnValueChange}
            placeholder="Please enter a number"
            prefix={prefix}
            step={1}
            decimalScale={2}
          />
          <div className={`invalid-feedback ${className}`}>{errorMessage}</div>
          <DatePicker selected={date} onChange={date => handleSelectDate(date)} />
          <label htmlFor="for">Description(optional)</label>
          <input type="text" required value={description} onChange={onChangeDescription} />
        </div>
        <div className='content'></div>
        <button className='submit-expense' onClick={() => {
          onSubmitExpense(userId, categoryId, value, description, date)
        }
        }>
          Ok
        </button>
      </div>
    </div>
  )
}

export default Modal;
