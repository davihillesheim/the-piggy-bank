import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import CurrencyInput from 'react-currency-input-field';
import './Modal.css';

const Modal = ({ id = 'modal', onClose = () => { }, categories, addExpense }) => {

  const userId = Number(localStorage.getItem('loggedUser'));
  const [categoryId, setCategoryId] = useState();
  const [date, setDate] = useState(new Date());

  const limit = 10000;
  const prefix = '£';

  const [errorMessage, setErrorMessage] = useState('');
  const [className, setClassName] = useState('');
  const [value, setValue] = useState(0.00);

  const [amountValidated, setAmountValidated] = useState(false);
  const [categoryValidated, setCategoryValidated] = useState(false);

  /**
   * Handle validation of the amount set
   */
  const handleOnValueChange = value => {

    if (!value) {
      setClassName('');
      setValue('');
      setAmountValidated(false);
      return;
    }

    if (Number.isNaN(Number(value))) {
      setErrorMessage('Please enter a valid number');
      setClassName('is-invalid');
      setAmountValidated(false);
      return;
    }

    if (Number(value) > limit) {
      setErrorMessage(`Max: ${prefix}${limit}`);
      setClassName('is-invalid');
      setValue(value);
      setAmountValidated(false);
      return;
    }

    setClassName('is-valid');
    setValue(value);
    setAmountValidated(true);
  };

  const handleSelectDate = date => {
    setDate(new Date(date));
  }

  const handleOutsideClick = event => {
    if (event.target.id === id) onClose();
  }

  const onChangeCategoryId = value => {
    setCategoryId(Number(value));
    setCategoryValidated(true);
  }

  const onSubmitExpense = (userId, categoryId, amount, date) => {
    fetch('http://localhost:3001/expenses', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: userId,
        category_id: categoryId,
        amount: amount,
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
        <p className={categoryValidated ? 'category-valid' : 'category-invalid'}>Select a category</p>
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
          <DatePicker selected={date} dateFormat="dd/MM/yyyy" onChange={date => handleSelectDate(date)} />
        </div>
        <div className='content'></div>
        <button className='submit-expense' disabled={!(amountValidated && categoryValidated)} onClick={() => {
          onSubmitExpense(userId, categoryId, value, date)
        }
        }>
          Ok
        </button>
      </div>
    </div>
  )
}

export default Modal;
