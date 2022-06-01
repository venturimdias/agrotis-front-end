import logo from '../../public/logo.svg'
import { Button } from '@material-ui/core'

import styles from './header.module.css'

import styled from "styled-components";

const Logo = styled.img`
  width:130px;
`

export default function Header(){
  return <header className={styles.AppHeader}>
    <Logo src={logo} alt="logo" /> 
    {/* <Button color="primary">Olá</Button> */}
  </header>
}