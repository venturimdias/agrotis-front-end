import React from 'react'
import Footer from './'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => <Footer {...args} />;

export const Defualt = Template.bind({});
Defualt.args = {};

export const Segundario = Template.bind({});
Segundario.args = {  
  label: 'Copyright Venturim dias',
  bg: 'prim700',
};

// export const Black = () => <Footer bg={"red"} />
