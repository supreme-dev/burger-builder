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
        {controls.map(control => (
            <BuildControl
             key={control.label}
             label={control.label}
             added={() => props.ingredientsAdded(control.type)}
             removed={() => props.ingredientsRemoved(control.type)}
            />
        ))}
    </div>
    );
};

// export
export default buildControls;