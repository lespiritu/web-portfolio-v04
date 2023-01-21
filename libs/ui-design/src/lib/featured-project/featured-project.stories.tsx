import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FeaturedProject } from './featured-project';

export default {
  component: FeaturedProject,
  title: 'UI/FeaturedProject',

} as ComponentMeta<typeof FeaturedProject>;

const Template: ComponentStory<typeof FeaturedProject> = (args) => <FeaturedProject {...args} />;

const PrimaryTemplate = Template.bind({});


PrimaryTemplate.args = {
    
    title:'Halcyon Theme',
    variant:'primary',
    descriptionText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo alias, consectetur expedita distinctio eaque illum provident officia maxime quod quam quis aliquid. Obcaecati alias, odio eos vel ipsam assumenda corporis voluptate provident ad perferendis fugit doloremque impedit iste nesciunt dolor voluptatum consequatur nobis nulla sapiente?',
    usedTools:['html', 'css', 'github', 'javascript', 'react.js'],
    externalLink:'https://wallsdesk.com/angry-birds-61579/',
    imageLink:'https://wallsdesk.com/wp-content/uploads/2016/11/Angry-Birds-4K.jpg',
    learnMoreLink:'https://www.newline.co/courses/build-a-spotify-connected-app'
    
};

const props ={
    title:'This is Primary Style',
    variant:'primary',
    descriptionText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo alias, consectetur expedita distinctio eaque illum provident officia maxime quod quam quis aliquid. Obcaecati alias, odio eos vel ipsam assumenda corporis voluptate provident ad perferendis fugit doloremque impedit iste nesciunt dolor voluptatum consequatur nobis nulla sapiente?',
    usedTools:['html', 'css', 'github', 'javascript', 'react.js'],
    externalLink:'https://wallsdesk.com/angry-birds-61579/',
    imageLink:'https://wallsdesk.com/wp-content/uploads/2016/11/Angry-Birds-4K.jpg',
    learnMoreLink:'https://www.newline.co/courses/build-a-spotify-connected-app'
}

const props1 ={
    title:'This is Secondary Style',
    variant:'secondary',
    descriptionText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo alias, consectetur expedita distinctio eaque illum provident officia maxime quod quam quis aliquid. Obcaecati alias, odio eos vel ipsam assumenda corporis voluptate provident ad perferendis fugit doloremque impedit iste nesciunt dolor voluptatum consequatur nobis nulla sapiente?',
    usedTools:['html', 'css', 'github', 'javascript', 'react.js'],
    externalLink:'https://wallsdesk.com/killing-floor-2-57846//',
    imageLink:'https://wallsdesk.com/wp-content/uploads/2016/11/Killing-Floor-2-Wallpapers-HD.jpg',
    learnMoreLink:'https://www.newline.co/courses/build-a-spotify-connected-app'
}

const props2 ={
    title:'This is with the githublink icon and external link icon',
    variant:'primary',
    descriptionText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo alias, consectetur expedita distinctio eaque illum provident officia maxime quod quam quis aliquid. Obcaecati alias, odio eos vel ipsam assumenda corporis voluptate provident ad perferendis fugit doloremque impedit iste nesciunt dolor voluptatum consequatur nobis nulla sapiente?',
    usedTools:['html', 'css', 'github', 'javascript', 'react.js'],
    githubLink:'https://github.com/bchiang7/time-to-have-more-fun',
    externalLink:'https://time-to-have-more-fun.vercel.app/',
    imageLink:'https://wallsdesk.com/wp-content/uploads/2016/11/Life-is-Strange-full-HD.jpg'
}


export const Primary = ()=>{
    return(
        <div style={{backgroundColor:'#0d1420', padding:'20px'}}> 
        <PrimaryTemplate {...props}></PrimaryTemplate>
        </div>
    )
}

export const Secondary = ()=>{
    return(
        <div style={{backgroundColor:'#0d1420', padding:'20px'}}> 
        <PrimaryTemplate {...props1}></PrimaryTemplate>
        </div>
    )
}
export const Main = () => {
    return (
      <div style={{backgroundColor:'#0d1420', padding:'20px'}}>
        <PrimaryTemplate {...props}></PrimaryTemplate>
        <PrimaryTemplate {...props1}></PrimaryTemplate>
        <PrimaryTemplate {...props2}></PrimaryTemplate>
      </div>
    );
  };
  