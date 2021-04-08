import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

export default function NavBarApp() {
  return (
    <S.Nav>
      <ul>
        <S.BackItemNav>
          <Link to="/painel">
          <S.ItemNav>
            Painel
          </S.ItemNav>
          </Link>
        </S.BackItemNav>
        <S.BackItemNav>
          <Link to="/cartoes">
            <S.ItemNav>
            Cartões
            </S.ItemNav>
          </Link>
        </S.BackItemNav>
        <S.BackItemNav active>
          <Link to="/metas">
            <S.ItemNav active>
            Metas
          </S.ItemNav>
          </Link>
        </S.BackItemNav>
        <S.BackItemNav>
          <Link to="/contas">
          <S.ItemNav>
            Contas
          </S.ItemNav>
          </Link>
        </S.BackItemNav>
        <S.BackItemNav>
          <Link to="/econopontos">
          <S.ItemNav>
            Econopontos
          </S.ItemNav>
          </Link>
        </S.BackItemNav>
      </ul>
    </S.Nav>
  )
}
