
interface featuredProjectShade{
    
    title:string;
    variant?: 'primary' | 'secondary';
    descriptionText:string;
    usedTools:string[];
    externalLink:string;
    imageLink:string;
    githubLink?:string;
    learnMoreLink?:string;   
  

 
        
}
export const featuredProjectData: featuredProjectShade[]= [
    
    {
    title:'Halcyon Theme',
    variant:'primary',
    descriptionText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo alias, consectetur expedita distinctio eaque illum provident officia maxime quod quam quis aliquid. Obcaecati alias, odio eos vel ipsam assumenda corporis voluptate provident ad perferendis fugit doloremque impedit iste nesciunt dolor voluptatum consequatur nobis nulla sapiente?',
    usedTools:['html', 'css', 'github', 'javascript', 'react.js'],
    externalLink:'https://wallsdesk.com/angry-birds-61579/',
    imageLink:'https://wallsdesk.com/wp-content/uploads/2016/11/Angry-Birds-4K.jpg',
    learnMoreLink:'https://www.newline.co/courses/build-a-spotify-connected-app'
    },

    {
    title:'Modern Warfair',
    variant:'secondary',
    descriptionText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo alias, consectetur expedita distinctio eaque illum provident officia maxime quod quam quis aliquid. Obcaecati alias, odio eos vel ipsam assumenda corporis voluptate provident ad perferendis fugit doloremque impedit iste nesciunt dolor voluptatum consequatur nobis nulla sapiente?',
    usedTools:['html', 'css', 'github', 'javascript', 'react.js'],
    externalLink:'https://wallsdesk.com/killing-floor-2-57846//',
    imageLink:'https://wallsdesk.com/wp-content/uploads/2016/11/Killing-Floor-2-Wallpapers-HD.jpg',
    learnMoreLink:'https://www.newline.co/courses/build-a-spotify-connected-app'
    },
 
    {
    title:'The Blood',
    variant:'primary',
    descriptionText:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo alias, consectetur expedita distinctio eaque illum provident officia maxime quod quam quis aliquid. Obcaecati alias, odio eos vel ipsam assumenda corporis voluptate provident ad perferendis fugit doloremque impedit iste nesciunt dolor voluptatum consequatur nobis nulla sapiente?',
    usedTools:['html', 'css', 'github', 'javascript', 'react.js'],
    githubLink:'https://github.com/bchiang7/time-to-have-more-fun',
    externalLink:'https://time-to-have-more-fun.vercel.app/',
    imageLink:'https://wallsdesk.com/wp-content/uploads/2016/11/Life-is-Strange-full-HD.jpg'
    }
]
    
            
