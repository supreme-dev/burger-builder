// vendor import
import React from 'react';

// local import
import BurgerLogo from '../../assests/images/burger-logo.png';

const logo = (props) => (
    <div className="Logo">
        <img src={BurgerLogo} alt="Burger" />
    </div>
);

// export
export default logo;