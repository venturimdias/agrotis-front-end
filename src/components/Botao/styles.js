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
    font-size:1.2rem;
    padding:15px 30px;
  }
  &.md,
  &.medium{
    font-size:1.0rem;
    padding:10px 20px;
  }
  &.sm,
  &.small{
    font-size:0.8rem;
    padding:5px 10px;
  }

  &:hover{
    opacity:.8;
  }

  ${(props) => (props.outline ? css`
    background:transparent;
    border:1px solid var(--black-200, ${color.black200});
  `: "" )}
`
export const Link = styled.a`
  display:inline-flex;
  align-items:center;
  gap:10px;

  background:var(--prim-700, ${color.prim700});
  color:var(--white, ${color.white});
  text-decoration:none;
  border-radius:50px;

  height:26px;
  font-size:0.9rem;
  padding:0 15px;
  
  &.icon{ padding:0 13px; }
  &.icon > svg{ margin:0 -12px; }
  &.iconBefore > svg:first-child{ margin-left: -10px; }
  &.iconAfter > svg:last-child{ margin-right: -10px; }

  & > svg{
    width:20px;
    height:20px;

    & > path{
      fill:currentColor;
    }
  } 

  &.lg,
  &.large{
    height:52px;
    font-size:1.6rem;
    padding:0 40px;
  }
  &.md,
  &.medium{
    height:40px;
    font-size:1.2rem;
    padding:0 30px;
  }

  &:hover{
    opacity:.8;
  }
`
