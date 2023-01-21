import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Section } from './section';

export default {
  component: Section,
  title: 'UI/Section',

} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'This is the primary style',
    sectionNumber: '01',
    variant: 'primary'
};

const props ={
    title: 'This is the primary style',
    sectionNumber: '01',
    variant: 'primary'
}

const propsCentered ={
    title: 'This is centered style',
    sectionNumber: '01',
    variant: 'centered'


}

export const Centered = ()=>{
    return(
        <div style={{backgroundColor:'#0d1420', padding:'50px'}}>
            <Primary {...propsCentered}>
                <h4 style={{color:'white', textAlign:'center'}}>About</h4>
                <p style={{color:'white', lineHeight:'30px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur eius minus autem totam nam. Neque illum itaque aspernatur laboriosam repudiandae odit consequuntur reprehenderit veritatis, voluptas alias nostrum, cum, ratione commodi sint quis et expedita aut? Corporis esse, placeat nisi dolorem neque assumenda exercitationem quisquam accusantium est enim reiciendis omnis mollitia quos, eligendi quaerat ipsa adipisci voluptatem porro fuga corrupti officiis laborum. Minus nostrum ratione impedit natus quod, perferendis sit sed cumque nihil est iusto voluptatem ipsa dolor, eligendi illum dignissimos magni error blanditiis reprehenderit obcaecati autem in, itaque modi! Illum eaque facilis sint iste placeat consequuntur voluptatum eligendi fugit ducimus!</p>

            </Primary>
        </div>
    )
}

export const Main = () => {
    return (
      <div style={{backgroundColor:'#0d1420', padding:'50px'}}>
        <Primary {...props}>
                <h4 style={{color:'white'}}>About</h4>
                <p style={{color:'white', lineHeight:'30px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur eius minus autem totam nam. Neque illum itaque aspernatur laboriosam repudiandae odit consequuntur reprehenderit veritatis, voluptas alias nostrum, cum, ratione commodi sint quis et expedita aut? Corporis esse, placeat nisi dolorem neque assumenda exercitationem quisquam accusantium est enim reiciendis omnis mollitia quos, eligendi quaerat ipsa adipisci voluptatem porro fuga corrupti officiis laborum. Minus nostrum ratione impedit natus quod, perferendis sit sed cumque nihil est iusto voluptatem ipsa dolor, eligendi illum dignissimos magni error blanditiis reprehenderit obcaecati autem in, itaque modi! Illum eaque facilis sint iste placeat consequuntur voluptatum eligendi fugit ducimus!</p>
        </Primary>

        <Primary {...propsCentered}>
                <h4 style={{color:'white', textAlign:'center'}}>About</h4>
                <p style={{color:'white', lineHeight:'30px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur eius minus autem totam nam. Neque illum itaque aspernatur laboriosam repudiandae odit consequuntur reprehenderit veritatis, voluptas alias nostrum, cum, ratione commodi sint quis et expedita aut? Corporis esse, placeat nisi dolorem neque assumenda exercitationem quisquam accusantium est enim reiciendis omnis mollitia quos, eligendi quaerat ipsa adipisci voluptatem porro fuga corrupti officiis laborum. Minus nostrum ratione impedit natus quod, perferendis sit sed cumque nihil est iusto voluptatem ipsa dolor, eligendi illum dignissimos magni error blanditiis reprehenderit obcaecati autem in, itaque modi! Illum eaque facilis sint iste placeat consequuntur voluptatum eligendi fugit ducimus!</p>
        </Primary>
        
      </div>
    );
  };
  