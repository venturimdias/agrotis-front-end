import styled, { css } from "styled-components"
import { color } from "../../styles/global"

export const Container = styled.section`
  display:flex;
  gap:20px;
  justify-content:center;
  width:100%;
  background: ${({theme}) => theme.color.prim800 };  
  color: ${({theme}) => theme.color.white };
  text-align:center;
  padding:10px;

  ${props => props.bg ? css` 
    background: ${({theme}) => theme.color[`${props.bg}`] };
  ` : "" }

  a{
    color:${({theme}) => theme.color.white}
    //color:var(--white, ${color.white});
  }
`