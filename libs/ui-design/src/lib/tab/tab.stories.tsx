import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from './tab';
import { TabContent } from './tab-content';

export default {
  component: Tab,
  title: 'UI/Tab',
} as ComponentMeta<typeof Tab>;

const TabTemplate: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

const TabContentTemplate: ComponentStory<typeof TabContent> = (args) => <TabContent {...args} />;
const tabContentTemplate = TabContentTemplate.bind({});

tabContentTemplate.args = {
  title: 'Creative Technologist ',
  subTitle: 'July - December 2015',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem excepturi odit suscipit quaerat ut eius voluptas distinctio eligendi velit quibusdam veritatis assumenda, fugit eaque! Aliquid dolorum repellendus eos dolores necessitatibus et quisquam est quaerat modi fugiat, ea nobis nemo fuga excepturi, inventore officiis voluptate, facilis facere temporibus veniam eaque?',
  listContent: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum necessitatibus eos repudiandae tempora eaque? Quasi voluptate facilis at voluptatibus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum necessitatibus eos repudiandae tempora eaque? Quasi voluptate facilis at voluptatibus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum necessitatibus eos repudiandae tempora eaque? Quasi voluptate facilis at voluptatibus?',
  ],
};
const tabData1 = {
  title: 'Creative Technologist ',
  subTitle: 'July - December 2015',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem excepturi odit suscipit quaerat ut eius voluptas distinctio eligendi velit quibusdam veritatis assumenda, fugit eaque! Aliquid dolorum repellendus eos dolores necessitatibus et quisquam est quaerat modi fugiat, ea nobis nemo fuga excepturi, inventore officiis voluptate, facilis facere temporibus veniam eaque?',
  listContent: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum necessitatibus eos repudiandae tempora eaque? Quasi voluptate facilis at voluptatibus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum necessitatibus eos repudiandae tempora eaque? Quasi voluptate facilis at voluptatibus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum necessitatibus eos repudiandae tempora eaque? Quasi voluptate facilis at voluptatibus?',
  ],
};

const tabData2 = {
  title: 'Front End Developement ',
  subTitle: 'July - December 2021',
  content:
    'Sequi rem excepturi odit suscipit quaerat ut eius voluptas distinctio eligendi velit quibusdam veritatis assumenda, fugit eaque! Aliquid dolorum repellendus eos dolores necessitatibus et quisquam est quaerat modi fugiat, ea nobis nemo fuga excepturi, inventore officiis voluptate, facilis facere temporibus veniam eaque?',
  listContent: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum necessitatibus eos repudiandae tempora eaque? Quasi voluptate facilis at voluptatibus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum necessitatibus eos repudiandae tempora eaque? Quasi voluptate facilis at voluptatibus?',
    'Quaerat illum necessitatibus eos repudiandae tempora eaque? Quasi voluptate facilis at voluptatibus?',
  ],
};
const listTabContent = [
  <TabContent {...tabData1} />,
  <TabContent {...tabData2} />,
  <TabContent {...tabData1} />,
  <TabContent {...tabData2} />,
  <TabContent {...tabData1} />,
  <TabContent {...tabData2} />,
];

const propsTab = {
  tabHeader: ['Home', 'Projects', 'Contacts'],
  tabContent: listTabContent,
};

export const SampleTabContent = () => {
  return (
    <div style={{ backgroundColor: '#0d1420', padding: '50px' }}>
      <TabContent {...tabData1} />
    </div>
  );
};

export const Main = () => {
  return (
    <div style={{ backgroundColor: '#0d1420', padding: '50px' }}>
      <TabTemplate {...propsTab} />
    </div>
  );
};

const propsTab2 = {
  tabHeader: ['Home', 'Projects', 'Contacts', 'Achievements', 'Gallery', 'About'],
  tabContent: listTabContent,
};

export const More = () => {
  return (
    <div style={{ backgroundColor: '#0d1420', padding: '50px' }}>
      <TabTemplate {...propsTab2} />
    </div>
  );
};
