// vendor import
import React from 'react';

// local imports
import Aux from '../../hoc/aux';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer';
// layout
class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };

  // sidedrawer event handler
  SideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer closed={this.SideDrawerCloseHandler} open={this.state.showSideDrawer} />
        <main className="layout">{this.props.children}</main>
      </Aux>
    );
  }
}

// export
export default Layout;
