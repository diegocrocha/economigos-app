import React from 'react'
import * as S from './style'
import Logo from '../../assets/logo.svg'
import ButtonMain from '../ButtonMain/ButtonMain'
import ButtonS from '../ButtonS/ButtonS'

const Header = () => {
  return (
    <S.Header>
      <S.Logo src={Logo} alt=''/>
      <ButtonMain>Cadastro</ButtonMain>
      <ButtonS>Login</ButtonS>
    </S.Header>
  )
}

export default Header;
