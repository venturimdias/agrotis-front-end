import styled from "styled-components"

export const Logo = styled.img`
  width:130px;
`
export const Container = styled.header`
  background-color: ${({theme}) => theme.color.white};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.26);
  margin:0 0 35px;
`