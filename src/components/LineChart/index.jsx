import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import cs from './component.pcss';

const dotStyle = {
  strokeWidth: 2,
  r: 6,
};

const margins = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 5,
};

const activeDotStyle = {
  r: 6,
  strokeWidth: 0,
  fill: '#c78bfe',
};

const tickStyle = {
  fontSize: 14,
  fill: '#7f8590',
  fontFamily: 'Lato, sans-serif',
};

const yAxisTickStyle = Object.assign({
  style: {
    transform: 'translateX(-20px)',
  },
}, tickStyle);

const xAxisTickStyle = Object.assign({
  style: {
    transform: 'translateY(16px)',
  },
}, tickStyle);

const renderToolip = (options) => {
  if (options.active) {
    return (
      <div className={cs.tooltip}>
        <div className={cs.value}>{options.payload[0].value}</div>
        <div className={cs.title}>New leads</div>
      </div>
    );
  }

  return null;
};

const Chart = (props) => {
  return (
    <div className={cs.root}>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={props.data} margin={margins}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#c78bfe"
            strokeWidth="3"
            dot={dotStyle}
            activeDot={activeDotStyle}
          />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tick={xAxisTickStyle}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={yAxisTickStyle}
          />
          <Tooltip
            cursor={false}
            content={renderToolip}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Chart;
