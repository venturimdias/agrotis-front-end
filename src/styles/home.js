import styled from "styled-components"

export const BtnTheme = styled.button`
  background:${({theme}) => theme.color.prim700};
  color:${({theme}) => theme.color.white};
  padding: ${({theme}) => theme.button.padding.sm};
  height: ${({theme}) => theme.button.height.sm};
  border:0px;
  position: fixed;
  top:7px;
  right:5px;
`