// vendor import
import React from 'react';

// local import
import NavigationItem from './NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
       <NavigationItem link="/" active>Burger Builder </NavigationItem>
       <NavigationItem link="/">Checkout </NavigationItem>
    </ul>
);

// export
export default navigationItems;