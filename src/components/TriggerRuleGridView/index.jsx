import React from 'react';
import PropTypes from 'prop-types';
import Panel, { Content, Header } from '../Panel';
import Text from '../Text';
import Flex from '../Flex';
import Padding from '../Padding';
import Icon from '../Icon';
import cs from './component.pcss';

const SavedRuleGridView = (props) => {
  return (
    <div>
      <Panel>
        <Header>
          <Flex justifyContent="space-between">
            <Text>{props.rule.name}</Text>
            <Icon icon="trash" />
          </Flex>
        </Header>
        <Content>
          <div className={cs.title}>Date</div>
          <div className={cs.description}>{props.rule.date}</div>
          <Padding padding={{ top: 20 }}>
            <Flex justifyContent="space-between">
              <div>
                <div className={cs.title}>Boost days</div>
                <div className={cs.description}>{props.rule.boostDays}</div>
              </div>
              <div>
                <div className={cs.title}>Daily Budget</div>
                <div className={cs.description}>{props.rule.dailyBudget}</div>
              </div>
            </Flex>
          </Padding>
        </Content>
      </Panel>
    </div>
  );
};

SavedRuleGridView.propTypes = {
  rule: PropTypes.shape({
    date: PropTypes.string.isRequired,
    boostDays: PropTypes.string.isRequired,
    dailyBudget: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default SavedRuleGridView;
