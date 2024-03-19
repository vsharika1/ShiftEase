import type { Preview } from '@storybook/react';

import '../app/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/iu,
        date: /Date$/iu,
      },
    },
    layout: 'centered',
  },
};

export default preview;
