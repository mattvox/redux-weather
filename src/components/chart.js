import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  const average = (data) => _.round(_.sum(data)/data.length);

  return (
    <div>
      <div className='custom-chart'>
        <Sparklines
          className='custom-chart'
          svgHeight={100}
          width={100}
          data={props.data}
          min={props.min}
          max={props.max}
        >
          <SparklinesLine color={props.color}/>
          <SparklinesReferenceLine type='avg'/>
        </Sparklines>
      </div>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};
