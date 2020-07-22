// vendor import
import React from 'react';

// local imports
import Aux from '../../hoc/aux';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer';
// layout
class Layout extends React.Component {
  state = {
    showSideDrawer: true,
  };

  // sidedrawer event handler
  SideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer closed={this.SideDrawerCloseHandler} open={this.state.showSideDrawer} />
        <main className="layout">{this.props.children}</main>
      </Aux>
    );
  }
}

// export
export default Layout;
