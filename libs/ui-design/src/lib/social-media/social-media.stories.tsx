import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SocialMedia } from './social-media';

export default {
  component: SocialMedia,
  title: 'UI/Social Media',
} as ComponentMeta<typeof SocialMedia>;

const TabTemplate: ComponentStory<typeof SocialMedia> = (args) => <SocialMedia {...args} />;

const propsTab2 = {
  githubLink: 'https://www.google.com/',
  instagramLink: 'https://www.google.com/',
  inLink: 'https://www.google.com/',
  youtubeLink: 'https://www.google.com/',
  fbLink: 'https://www.google.com/',
  twitterLink: 'https://www.google.com/',
  codepenLink: 'https://www.google.com/',
};
export const Main = () => {
  return (
    <div
      style={{
        backgroundColor: '#0d1420',
        padding: '50px',
        width: '100vh',
        height: '100vh',
      }}
    >
      <TabTemplate
        style={{ backgroundColor: '#0d1420', padding: '20px', width: 'fit-content' }}
        {...propsTab2}
      />
    </div>
  );
};
