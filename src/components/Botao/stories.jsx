import React from 'react'
import Botao from './'

export default {
  title: 'Botao',
  component: Botao,
}

const Template = (args) => <Botao {...args} />;

export const Prim = Template.bind({});
Prim.args = {
  label: 'Button label',
  outline: true,
  className: 'sm',
};

export const Sec = Template.bind({});
Sec.args = { 
  label: 'Button label',
  className: 'large'
};