import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';
import HOC from '../../../hocomp/HOComp';
import Backdrop from '../backdrop/Backdrop';

const Modal = (props) => (
  <HOC>
    <Backdrop show={props.show}  clicked={props.modalClosed}/>
    <div className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </HOC>
);

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  modalClosed: PropTypes.number.isRequired
};

export default Modal;
