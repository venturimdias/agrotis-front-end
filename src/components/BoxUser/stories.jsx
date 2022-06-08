import { ClassNames } from '@emotion/react';
import BoxUser from './'

export default {
  title: 'Agrotis/BoxUser',
  component: BoxUser,
  // parameters: {
  //   layout: 'fullscreen',
  // },
}

const Template = (args) => <BoxUser {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    Name: 'Jonathan Venturim Dias',
    Bio: 'Desenvolvedor Front-end',
    Img: 'https://avatars.githubusercontent.com/u/6368640?s=400&u=16c25af9fe48915552494be73931445e9d289923&v=4',
    Social: {
      Site: 'https://www.linkedin.com/in/venturimdias/',
      Linkedin: 'https://www.linkedin.com/in/venturimdias/',
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Instagram: 'https://www.instagram.com/venturimdias',
    }
  },
};