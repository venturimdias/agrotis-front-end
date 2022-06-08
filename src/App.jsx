import { useState } from "react"
import { Header, Formulario, Footer } from './components'
import { ThemeProvider } from "styled-components"
import { GlobalStyled } from "./styles/global"
import { theme, themeDark } from './styles/theme'


import styled from "styled-components"
import * as S from './styles/home'

const ContFooter = styled.footer`
  position:fixed;
  width:100%;
  bottom:0px;
`

function App() {

  const [th, setTh] = useState(theme)
  const toggleTheme = () => {
    if(th === theme){
      setTh(themeDark)
    }else{
      setTh(theme)
    }
  }

  return (
    <ThemeProvider theme={th}>
      <div className="App">
          <S.BtnTheme onClick={() => toggleTheme()}>{th === theme ? "Dark" : "Light"}</S.BtnTheme>
          <Header />
          <Formulario />      
          <ContFooter>
            <Footer />
          </ContFooter>
          <GlobalStyled />
      </div>
    </ThemeProvider>
  )
}
export default App
