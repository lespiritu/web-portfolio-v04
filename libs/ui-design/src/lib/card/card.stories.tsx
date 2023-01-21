import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './card';

export default {
  component: Card,
  title: 'UI/Card',

} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    id: 1,
    title: 'Time to Have More Fun',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur maiores consequuntur quos! In sunt tempore corporis possimus minima dicta.',
    footer: ['HTML', 'SCSS', 'React.js', 'GitHub'],
    externalLink: 'https://octoprofile.vercel.app/',
    gitHubLink: 'https://github.com/bchiang7/octoprofile',
    isActive: false,
};

const props ={
    id: 1,
    title: 'Time to Have More Fun',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur maiores consequuntur quos! In sunt tempore corporis possimus minima dicta.',
    footer: ['HTML', 'SCSS', 'React.js', 'GitHub'],
    externalLink: 'https://octoprofile.vercel.app/',
    gitHubLink: 'https://github.com/bchiang7/octoprofile',
    isActive: false,
}

export const Main = () => {
    return (
      <div style={{display: 'flex', gap:'10px'}}>
        <Primary {...props}/>
        <Primary {...props}/>
        <Primary {...props}/>
      </div>
    );
  };
  