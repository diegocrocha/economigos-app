import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'
import * as S from './style'
import GraficosFundoRedondo from '../../components/LogosSVGComponentes/GraficosFundoRedondo/GraficosFundoRedondo'
import ContasFundoRedondo from '../../components/LogosSVGComponentes/ContasFundoRedondo/ContasFundoRedondo'
import CartoesFundoRedondo from '../../components/LogosSVGComponentes/CartoesFundoRedondo/CartoesFundoRedondo'
import MetasFundoRedondo from '../../components/LogosSVGComponentes/MetasFundoRedondo/MetasFundoRedondo'
import EconopontosFundoRedondo from '../../components/LogosSVGComponentes/EconopontosFundoRedondo/EconopontosFundoRedondo'
import Sair from '../../components/LogosSVGComponentes/Sair/Sair'

export default function NavBarApp({ name }) {

  const location = useLocation();
  console.log();

  return (
    <S.Nav>
      <S.Ola>Olá, {name}!</S.Ola>
      <ul>
        <S.BackItemNav className={location.pathname == "/app/painel" ? "active-nav" : ""}>
          <NavLink to="/app/painel" activeClassName={location.pathname == "/app/painel" ? "active-nav" : ""}>
            <GraficosFundoRedondo active={location.pathname == "/app/painel" ? true : false} />
            <S.ItemNav className={location.pathname == "/app/painel" ? "active" : ""}>
              Painel
            </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav className={location.pathname == "/app/contas" ? "active-nav" : ""}>
          <NavLink to="/app/contas" activeClassName={location.pathname == "/app/contas" ? "active-nav" : ""}>
            <ContasFundoRedondo active={location.pathname == "/app/contas" ? true : false}/>
            <S.ItemNav className={location.pathname == "/app/contas" ? "active" : ""}>
              Contas
          </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav className={location.pathname == "/app/cartoes" ? "active-nav" : ""}>
          <NavLink to="/app/cartoes" activeClassName={location.pathname == "/app/cartoes" ? "active-nav" : ""}>
            <CartoesFundoRedondo active={location.pathname == "/app/cartoes" ? true : false}/>
            <S.ItemNav className={location.pathname == "/app/cartoes" ? "active" : ""}>
              Cartões
            </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        <S.BackItemNav active className={location.pathname == "/app/metas" ? "active-nav" : ""}>
          <NavLink to="/app/metas" activeClassName={location.pathname == "/app/metas" ? "active-nav" : ""}>
            <MetasFundoRedondo active={location.pathname == "/app/metas" ? true : false}/>
            <S.ItemNav active className={location.pathname == "/app/metas" ? "active" : ""}>
              Metas
          </S.ItemNav>
          </NavLink>
        </S.BackItemNav>
        {/* <S.BackItemNav>
          <NavLink to="/app/econopontos">
            <EconopontosFundoRedondo/>
            <S.ItemNav>
              Econopontos
          </S.ItemNav>
          </NavLink>
        </S.BackItemNav> */}
        <S.BackItemNav>
          <Sair/>
          <S.ItemNav>
            Sair
          </S.ItemNav>
        </S.BackItemNav>
      </ul>
    </S.Nav>
  )
}
