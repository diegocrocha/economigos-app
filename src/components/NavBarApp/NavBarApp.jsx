import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './style'

export default function NavBarApp({name}) {
  return (
    <S.Nav>
      <S.Ola>Olá, {name}!</S.Ola>
      <ul>
        <S.BackItemNav>
          <NavLink to="/app/painel" activeClassName="active-nav">
          <S.ItemNav>
            Painel
          </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav>
          <NavLink to="/app/cartoes">
            <S.ItemNav>
            Cartões
            </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav active>
          <NavLink to="/app/metas">
            <S.ItemNav active>
            Metas
          </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav>
          <NavLink to="/app/contas">
          <S.ItemNav>
            Contas
          </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav>
          <NavLink to="/app/econopontos">
          <S.ItemNav>
            Econopontos
          </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav>
        <S.ItemNav>
          Sair
        </S.ItemNav>
        </S.BackItemNav>
      </ul>
    </S.Nav>
  )
}
