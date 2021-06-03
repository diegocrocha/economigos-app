import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import * as S from './style'
import Sair from '../../components/LogosSVGComponentes/Sair/Sair'
import { UserContext } from '../../hooks/UserContext'
import GroupItemNav from '../GroupItemNav/GroupItemNav'


function ItemNav({type, func}) {
  let rota = false;
  switch (type) {
    case "painel":
      rota = location.pathname == "/app/painel";
      return (
        <S.BackItemNav active={rota}>
          <NavLink to="/app/painel" >
            <GroupItemNav type="Painel" active={rota} />
          </NavLink>
        </S.BackItemNav>
      )
    case "contas":
      rota = location.pathname == "/app/contas";
      return (
        <S.BackItemNav active={rota}>
          <NavLink to="/app/contas" >
            <GroupItemNav type="Contas" active={rota} />
          </NavLink>
        </S.BackItemNav>
      )
     case "cartoes":
      rota = location.pathname == "/app/cartoes";
      return (
        <S.BackItemNav active={rota}>
          <NavLink to="/app/cartoes" >
            <GroupItemNav type="Cartões" active={rota} />
          </NavLink>
        </S.BackItemNav>
      )
      case "metas":
        rota = location.pathname == "/app/metas";
        return (
          <S.BackItemNav active={rota}>
          <NavLink to="/app/metas" >
            <GroupItemNav type="Metas" active={rota} />
          </NavLink>
        </S.BackItemNav>
        )
      case "sair":
        return (
          <S.BackItemNav onClick={func}>
            <GroupItemNav type="Sair" />
        </S.BackItemNav>
        )
      default:
        return null
  }
}

export default function NavBarApp({ name }) {

  const location = useLocation();

  const { userLogout } = React.useContext(UserContext);

  return (
    <S.Nav>
      <S.Ola>Olá, {name}!</S.Ola>
      <ul>
        <ItemNav type="painel" />
        <ItemNav type="contas" />
        <ItemNav type="cartoes" />
        <ItemNav type="metas" />
        <ItemNav type="sair" func={userLogout}/>
      </ul>
    </S.Nav>
  )
}
