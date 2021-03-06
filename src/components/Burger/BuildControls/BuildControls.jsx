// vendor import
import React from 'react';

// local import
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
];
const buildControls = (props) => {
    return(
    <div className="buildcontrols">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl
             key={control.label}
             label={control.label}
             added={() => props.ingredientsAdded(control.type)}
             removed={() => props.ingredientsRemoved(control.type)}
             disabled={props.disabled[control.type]}
            />
        ))}
        <button className="OrderButton" disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
    );
};

// export
export default buildControls;