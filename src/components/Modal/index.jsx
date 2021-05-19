import React from 'react';
import './Modal.css';

const Modal = ({id ='modal', onClose = () => {}, children}) => {
  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <div id='modal' className='modal' onClick={handleOutsideClick}>
      <div className='modal-container'>
        <button className='close' onClick={onClose}>close</button>
        <div className='content'>{children}</div>
      </div>
    </div>
  )
}

export default Modal;
