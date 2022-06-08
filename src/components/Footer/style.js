import styled from "styled-components"
import { color } from "../../styles/global"

export const Container = styled.section`
  display:flex;
  gap:20px;
  justify-content:center;
  width:100%;
  background: ${({theme}) => theme.color.prim800 };
  color: ${({theme}) => theme.color.white };
  //background:var(--prim-800, ${props => props.bg ? color[`${props.bg}`] : color["prim800"]});
  //color:var(--white, ${color.white});
  text-align:center;
  padding:10px;

  a{
    color:${({theme}) => theme.color.white}
    //color:var(--white, ${color.white});
  }
`