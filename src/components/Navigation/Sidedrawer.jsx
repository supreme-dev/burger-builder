// vendor import
import React from 'react';

// local imports
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';
import Aux from '../../hoc/aux';
import Backdrop from '../UI/backdrop';


const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];

    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
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