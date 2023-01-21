import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button,
  title: 'UI/Button',
  argTypes: {
    onClick: { action: 'onClick executed!' },
    onFocus: { action: 'onFocus executed!' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Outline = Template.bind({});

Primary.args = {
  variant: 'primary',
  label: 'Primary button',
};

Outline.args = {
  variant: 'outline',
  label: 'Outline button',
};
