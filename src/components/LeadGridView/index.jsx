import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Flex from '../Flex';
import Col from '../Col';
import Padding from '../Padding';
import Image from '../Image';
import Text from '../Text';
import Background from '../Background';
import cs from './component.pcss';

const LeadGridView = (props) => {
  return (
    <div className={cs.root}>
      <Padding padding={{ top: 14, right: 15, bottom: 24, left: 15 }}>
        <Flex xs={{ justify: 'space-between', align: 'center' }}>
          <div>
            <div className={cs.automation}>
              <Flex xs={{ height: '100%', align: 'center', justify: 'center' }}>
                <Icon icon="automation" color="#ffffff" fontSize={23} pointer />
              </Flex>
            </div>
          </div>
          <div>
            <Flex>
              <Col xs={{ right: 10 }}>
                <Icon icon="edit" color="rgba(0, 0, 0, 0.2)" fontSize={23} pointer />
              </Col>
              <Col xs={{ left: 10 }}>
                <Icon icon="trash" color="rgba(0, 0, 0, 0.2)" fontSize={23} pointer />
              </Col>
            </Flex>
          </div>
        </Flex>
        <Flex xs={{ justify: 'center' }}>
          <Padding padding={{ top: 20, bottom: 20 }}>
            <Image src={props.lead.profilePicSrc} alt={props.lead.fullName} type="circle" width={120} />
          </Padding>
        </Flex>
        <Flex xs={{ justify: 'center' }}>
          <Padding padding={{ bottom: 20 }}>
            <Text color="#5d5d5d" fontSize={24} fontWeight="bold">{props.lead.fullName}</Text>
          </Padding>
        </Flex>
        <Flex xs={{ justify: 'center' }}>
          <Text color="rgba(0, 0, 0, 0.2)" fontSize={18}>
            <Flex>
              <Col xs={{ right: 3 }}>
                <Icon icon="location" color="rgba(0, 0, 0, 0.2)" />
              </Col>
              <Col xs={{ left: 3 }}>
                {props.lead.location}
              </Col>
            </Flex>
          </Text>
        </Flex>
      </Padding>
      <Background color="#f5f8fe">
        <Padding padding={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          <Flex xs={{ justify: 'space-around' }}>
            <div>
              <div className={cs.title}>Avg. Price</div>
              <div className={cs.description}>{props.lead.averagePrice}</div>
            </div>
            <div>
              <div className={cs.title}>Last Active</div>
              <div className={cs.description}>{props.lead.lastActive}</div>
            </div>
          </Flex>
        </Padding>
      </Background>
    </div>
  );
};

LeadGridView.propTypes = {
  lead: PropTypes.shape({
    profilePicSrc: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    averagePrice: PropTypes.string.isRequired,
    lastActive: PropTypes.string.isRequired,
  }).isRequired,
};

export default LeadGridView;
