import React from 'react'
import Botao from './'

export default {
  title: 'Agrotis/Botao',
  component: Botao,
}

const Template = (args) => <Botao {...args} />

export const Large = Template.bind({})
Large.args = {
  label: 'Button label',
  outline: true,
  className: 'lg',
  onClick: () => alert("cliquei no botão")
};

export const Medium = Template.bind({})
Medium.args = { 
  label: 'Button label',
  className: 'md',
};

export const Small = Template.bind({})
Small.args = { 
  label: 'Button label',
  className: 'sm',
}