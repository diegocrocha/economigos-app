import React from 'react'
import * as S from './style'
import Logo from '../../assets/logo.svg'
import ButtonMain from '../ButtonMain/ButtonMain'
import ButtonS from '../ButtonS/ButtonS'
import { NavBar } from '../NavBar/NavBar'

const Header = () => {
  return (
    <S.Header>
      <S.Logo src={Logo} alt=''/>
      <NavBar />
      <div>
        <ButtonS>Login</ButtonS>
        <ButtonMain>Cadastre-se</ButtonMain>
      </div>
    </S.Header>
  )
}

export default Header;
