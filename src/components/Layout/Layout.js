// vendor import
import React from 'react';

// local imports
import Aux from '../../hoc/aux';
import Toolbar from '../Navigation/Toolbar';
// layout
const layout = (props) => (
  <Aux>
    <Toolbar />
    <main className="layout">{props.children}</main>
  </Aux>
);

// export
export default layout;
