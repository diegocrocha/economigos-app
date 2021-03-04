import React from 'react'
import * as S from './style'
import Header from '../../components/Header/Header';
import { Input } from '../../components/Form/Input/Input';
import ButtonMain from '../../components/ButtonMain/ButtonMain';


function Institucional() {
  return (
    <>
      <S.Home>
        <Header />
        <S.TitleHome><span style={{color: '#44CE6C'}}>Econo</span>migos</S.TitleHome>
        <S.TextHome>A facilidade, organização e melhora financeira que você precisa!</S.TextHome>
        <ButtonMain style={{width: '196px', height: '47px'}}>Cadastre-se</ButtonMain>
      </S.Home>
    </>
  )
}

export default Institucional;

