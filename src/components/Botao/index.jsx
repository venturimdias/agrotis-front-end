import * as S from './styles'

const Botao = ({ label, outline, ...props}) => <S.Button 
outline={outline}
{...props} 
>
  {label || "Label"} 
</S.Button>

export default Botao