import './styles/App.css'
import { Header, Formulario, Footer } from './components'
import GlobalStyle from "./styles/global"
import styled from "styled-components"

const ContFooter = styled.footer`
  position:fixed;
  width:100%;
  bottom:0px;
`

function App() {
  return (
    <div className="App">
        <Header />
        <Formulario />      
        <ContFooter>
          <Footer />
        </ContFooter>
        <GlobalStyle />
    </div>
  )
}
export default App
