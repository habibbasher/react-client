import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Layout.css';
import HOC from '../../hocomp/HOComp';
import Toolbar from '../navigation/toolbar/Toolbar';
import SideDrawer from '../navigation/side-drawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render() {
    return (
      <HOC>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
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
