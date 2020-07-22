// vendor import
import React from 'react';

const buttons = (props) => (
  <button
    className={['Button', [props.btnType]].join(' ')}
    onClick={props.clicked}
  >{props.children}</button>
);

// export
export default buttons;