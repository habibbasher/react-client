import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';
import HOC from '../../../hocomp/HOComp';
import Backdrop from '../backdrop/Backdrop';

class Modal extends Component {

/*
  This method is implemented so that OrderSummary
  component does not rerendered internally
  untill it is shown.
*/

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate() {}");
  }

  render() {
    return (
      <HOC>
        <Backdrop show={this.props.show}  clicked={this.props.modalClosed}/>
        <div className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </HOC>
    );
  }
}

// Modal.propTypes = {
//   show: PropTypes.bool.isRequired,
//   children: PropTypes.any.isRequired,
//   modalClosed: PropTypes.func.isRequired
// };

export default Modal;
