import React from 'react'
import * as S from './style'

export const NavBar = () => {
  return (
    <S.NavBar>
      <S.ListHeader>
        <S.ItemList className="select">Home</S.ItemList>
        <S.ItemList>Diferencial</S.ItemList>
        <S.ItemList>Blog</S.ItemList>
        <S.ItemList>Dúvidas</S.ItemList>
        <S.ItemList>Contato</S.ItemList>
      </S.ListHeader>
    </S.NavBar>
  )
}
