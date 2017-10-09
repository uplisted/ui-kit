import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import ImageGallery from './index';

const images = [
  'https://i.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807--navy-blue-houses-blue-and-white-houses-exterior.jpg',
  'https://i.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807--navy-blue-houses-blue-and-white-houses-exterior.jpg',
  'https://i.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807--navy-blue-houses-blue-and-white-houses-exterior.jpg',
  'https://i.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807--navy-blue-houses-blue-and-white-houses-exterior.jpg',
  'https://i.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807--navy-blue-houses-blue-and-white-houses-exterior.jpg',
];

storiesOf('ImageGallery', module)
  .add('default', withInfo(() => {
    return (
      <ImageGallery isOpen onClose={() => false} images={images} activeIndex={0} />
    );
  }));
