import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Layout.css';
import HOC from '../../hocomp/HOComp';

class Layout extends Component {

  render() {
    return (
      <HOC>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </HOC>
    );
  }

}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
