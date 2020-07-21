// vendor import
import React from 'react';

// local import
import Aux from '../../hoc/aux';
// layout
const layout = (props) => (
  <Aux>
    <div>Toolbar, Sidebar, backdrop</div>
    <main className="layout">{props.children}</main>
  </Aux>
);

// export
export default layout;
