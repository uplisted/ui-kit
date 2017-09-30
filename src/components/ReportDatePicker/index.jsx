import React from 'react';
import DateRangePicker from '../DateRangePicker';
import Flex from '../Flex';
import Col from '../Col';
import cs from './component.pcss';

// Date interval options to select
const dateOptions = [
  {
    title: '1W',
    isActive: true,
  },
  {
    title: '2W',
    isActive: false,
  },
  {
    title: '1M',
    isActive: false,
  },
  {
    title: '3M',
    isActive: false,
  },
  {
    title: '1Y',
    isActive: false,
  },
];

const renderOptions = (options) => {
  const map = (item, index) => {
    const activeClassName = item.isActive ? cs.active : '';

    return (
      <Col key={index} xs={{ right: 30 }}>
        <span className={`${cs.interval} ${activeClassName}`}>{item.title}</span>
      </Col>
    );
  };

  return options.map(map);
};

class ReportDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div className={cs.root}>
        <Flex xs={{ height: 61, align: 'center', justify: 'space-between' }}>
          <Col>
            <Flex xs={{ align: 'center', justify: 'center' }}>
              {renderOptions(dateOptions)}
            </Flex>
          </Col>
          <Col>
            <div className={cs.rangePicker}>
              <Flex>
                <DateRangePicker
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput => this.setState({ focusedInput })}
                />
              </Flex>
            </div>
          </Col>
        </Flex>
      </div>
    );
  }
}

export default ReportDatePicker;
