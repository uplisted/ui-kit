import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import ImageGallery from './index';

const images = [
  'https://i0.wp.com/www.friendsofwintergreen.com/wp-content/uploads/2016/01/Pollak.jpg?fit=1136%2C516',
  'https://i.pinimg.com/originals/12/28/fa/1228fa8f91117416f3ce8e2955b83fbf.jpg',
  'https://nhs-dynamic.secure.footprint.net//Images/Homes/MJCCo16474/17885805-160316.jpg',
  'http://wadsworthparkwayapartments.com/wp/wp-content/uploads/home-photo-gallery-3.1136x516.jpg',
];

storiesOf('ImageGallery', module)
  .add('default', withInfo(() => {
    return (
      <ImageGallery isOpen onClose={() => false} images={images} activeIndex={0} />
    );
  }));
