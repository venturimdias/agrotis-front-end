import * as S from './style'

const Footer = ({ bg, label }) => <S.Container bg={bg}>    
    {label || "Jonathan Venturim Dias"}
    <a href="https://github.com/venturimdias/agrotis-front-end" target="_blank">Github</a>
  </S.Container>
export default Footer