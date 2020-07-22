// vendor import
import React from 'react';

// local imports
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';
import Aux from '../../hoc/aux';
import Backdrop from '../UI/backdrop';

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show />
        <div className="SideDrawer">
            <div className="Logo">
              <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
}
// export
export default sideDrawer;