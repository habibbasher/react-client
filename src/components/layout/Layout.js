import React, {Component} from 'react';

import classes from './Layout.css';
import HOC from '../../hocomp/HOComp';

class Layout extends Component {

  render() {
    return (
      <HOC>
        <div>Toolbar, SideDrawer, Backdrop</div>
        < main className={classes.content}>
          {this.props.children}
        </main>
      </HOC>
    );
  }

}


export default Layout;
