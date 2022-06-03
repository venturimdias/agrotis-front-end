import styled , { css } from "styled-components"
import { color } from "../../styles/global"

export const Button = styled.button`
  cursor:pointer;
  padding:10px 20px;
  border:0px;
  border-radius:50px;
  border:1px solid transparent; 
  font-weight:bold;

  &.lg,
  &.large{
    font-size:1.4rem;
    padding:15px 30px;
  }
  &.sm,
  &.small{
    font-size:1.0rem;
    padding:10px 20px;
  }

  &:hover{
    opacity:.8;
  }

  ${(props) => (props.outline ? css`
    background:transparent;
    border:1px solid var(--black-200, ${color.black200});
  `: "" )}
`