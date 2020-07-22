// vendor import
import React from 'react';

const navigationItem = (props) => (
        <li className="NavigationItem">
            <a
              href={props.link}
              className={props.active ? 'active' : null}
            >
                {props.children}
            </a>
        </li>
);

// export
export default navigationItem;