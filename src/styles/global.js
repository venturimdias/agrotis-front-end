import { createGlobalStyle } from "styled-components";

export const color = {
  white: "#FFF",
  black200:"#828D8C",
  black100:"#F3F2F1",
  prim800:"#00796B",
  prim700:"#00A98E",
}

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing:antialiased;  
    scroll-behavior: smooth; 
  }
 
  svg,
  svg path{
    fill:currentColor;    
  }

  body, input, button, select, textarea {
    font: 14px 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  
  button {
    cursor: pointer;
  }

  .App {
    padding:0 0 20px;
    min-height:100vh;
    background: ${({theme}) => theme.color.black100};
    /* background:var(--black-100, ${color.black100}); */
  }
`