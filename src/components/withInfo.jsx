import { withInfo } from '@storybook/addon-info';

export default (render) => {
  return withInfo('')(render);
};
