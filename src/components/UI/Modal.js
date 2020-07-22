// vendor import
import React from 'react';

// local imports
import Aux from '../../hoc/aux';
import Backdrop from './backdrop';

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className="Modal"
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </Aux>
);

// export
export default modal;
