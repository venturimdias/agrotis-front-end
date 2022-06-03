import React from 'react'
import Footer from './'

export default {
  title: 'Footer',
  component: Footer,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// export const Template = (args) => <Header {...args} />
const Template = (args) => <Footer {...args} />;

export const Defualt = Template.bind({});
Defualt.args = {};

export const Segundario = Template.bind({});
Segundario.args = {  
  label: 'Copyright Venturim dias',
  bg: 'prim700',
};

// export const Black = () => <Footer bg={"red"} />
