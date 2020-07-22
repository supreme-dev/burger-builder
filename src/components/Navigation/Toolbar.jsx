// vendor import
import React from 'react';

// local import
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>Menu</div>
        <div className="Logo">
          <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

// export
export default toolbar;