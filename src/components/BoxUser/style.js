import styled from "styled-components"
import { color } from "../../styles/global"

export const Container = styled.div`
  display:grid;
  grid-template-columns:auto 1fr;
  gap:20px;
  padding:10px;
  background:var(--prim-700, ${color.prim800});
  color:var(--white, ${color.white});

  h6{
    margin:0;
    font-size:1.4rem;
    line-height:120%;
  }
`
export const Desc = styled.div`
  display:flex;
  flex-direction:column;
  align-items:start;
  gap:5px;

  small{
    line-height:140%;
  }

  div{
    display:flex;
    gap:5px;
  }
`
export const Imagem = styled.div`
  width:80px;
  heoght:80px;

  & > img{
    display:block;
    width:100%;
    height:auto;
    border-radius:10px;
  }
`
