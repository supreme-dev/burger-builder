// vendor import
// vendor import
import React from 'react';

const buildControl = (props) => {
  console.log('build props', props);
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="Less">Less</button>
      <button className="More">More</button>
    </div>
  );
};

// export
export default buildControl;
