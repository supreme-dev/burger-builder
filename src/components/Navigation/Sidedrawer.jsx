// vendor import
import React from 'react';

// local imports
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';

const sideDrawer = (props) => {
    return (
        <div className="SideDrawer">
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}
// export
export default sideDrawer;