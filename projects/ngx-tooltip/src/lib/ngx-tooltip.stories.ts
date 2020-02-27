import { NgxTooltipComponent } from './ngx-tooltip.component';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Tooltip',
  decorators: [withKnobs]
};

export const topRight = () => ({
  component: NgxTooltipComponent,
  props: {
    message: text('message', 'Top Right')
  }
});

export const topLeft = () => ({
  component: NgxTooltipComponent,
  props: {
    message: text('message', 'Top Left')
  }
});

export const bottomRight = () => ({
  component: NgxTooltipComponent,
  props: {
    message: text('message', 'Bottom Right')
  }
});

export const bottomLeft = () => ({
  component: NgxTooltipComponent,
  props: {
    message: text('message', 'Bottom Left')
  }
});
