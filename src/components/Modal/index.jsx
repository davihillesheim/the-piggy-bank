import React from 'react';
import './Modal.css';

const Modal = ({ id = 'modal', onClose = () => { }, categories }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  }

  return (
    <div id='modal' className='modal' onClick={handleOutsideClick}>
      <div className='modal-container'>
        <button className='close' onClick={onClose}>close</button>
        <ul className='category-grid'>
          {categories.map(category => <li key={category.id}>
            <img src={category.icon_url} alt={category.name} />
            <span>
              {category.name}
            </span>
          </li>)}
        </ul>
        <div className='content'></div>
      </div>
    </div>
  )
}

export default Modal;
