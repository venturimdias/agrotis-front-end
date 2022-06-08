import styled from "styled-components";

export const Header = styled.header`
  
  background:${({theme}) => theme.color.prim800};
  color:${({theme}) => theme.color.white};
  display:flex;
  align-items: center;
  justify-content: space-between;
  height:55px;
  padding:0 20px;
  margin-bottom:20px;

  & > h3{
    font-size:20px;
    font-weight:500;
  }
 & > input{
    display:flex;
    align-items: center;
    height:35px;
    font-size:14px;
    font-weight:bold;
    text-transform:uppercase;
    color:${({theme}) => theme.color.white};
    background:${({theme}) => theme.color.prim700};
    padding:0 15px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.26);
    border-radius: 2px;
    border:0px;
    cursor:pointer;
  }
`

export const Box  = styled.div`
  .MuiInputBase-input{
    font-size: 1.4rem;
  }
  .container{
    background:${({theme}) => theme.color.white};
    padding:0 0 20px;
    max-width:1160px;
    width:95%;
    margin:0 auto;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.26);
    overflow: hidden;
    position: relative;
  }
  .boxBlock{
    position:absolute;
    inset: 0;
    z-index: 10;
    display:none;
    gap:20px;
    align-items: center;
    justify-content: center;
    background:${({theme}) => theme.color.black100};
    font-size:24px;
    color:${({theme}) => theme.color.black200};
    text-decoration: none;
    font-weight: bold;
  }
  .boxBlock.active{
    display:flex;
  }
  .boxBlock.active small{
    display:block;
    font-size:15px;
    font-weight:500;
  }

  .boxBlock svg,
  .boxBlock svg path{
    fill:currentColor;
  }

  .linha{
    display:grid;
    gap:15px;
    padding:10px 20px;
  }
  .linha1{
    grid-template-columns:1fr 1fr 1fr;
  }
  .linha2{
    grid-template-columns:1fr 1fr;
  }

  .ItemSelect{
    width:100%;
    padding:10px 0;
  }
  .ItemSelect h3{
    margin:0px
  }

  @media(max-width:768px){
    .linha1,
    .linha2{
      grid-template-columns: 1fr;
    }

  }
`