import * as S from './styles'

const Botao = ({ label, outline, nolabel, iconBefore, iconAfter, ...props}) => props.href 
? <S.Link 
  className={[ nolabel ? "icon" : "", 
    iconBefore ? "iconBefore" : "", 
    iconAfter ? "iconAfter" : "", 
  ].join(' ')}
  {...props}>
  {iconBefore}
  {!nolabel ? label || "Label" : ""}
  {iconAfter}
</S.Link>
: <S.Button 
outline={outline}
{...props} 
>
  {label || "Label"} 
</S.Button>

export default Botao