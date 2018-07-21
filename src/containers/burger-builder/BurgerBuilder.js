import React, {Component} from 'react';

import HOComp from '../../hocomp/HOComp';
import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component {

  render() {
    return (
      <HOComp>
        <Burger />
        <div>BuildControls</div>
      </HOComp>
    );
  }

}

export default BurgerBuilder;
