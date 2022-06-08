import logo from '../../public/logo.svg'
import * as S from "./style"

export default function Header(){
  return <S.Container>
    <S.Logo src={logo} alt="logo" /> 
  </S.Container>
}